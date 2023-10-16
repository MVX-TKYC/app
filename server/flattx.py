# TKYC_Model_Simple

import pandas as pd

def flatten_json(data, parent_key='', sep='_'):
    """
    A function to flatten JSON objects.
    
    :param data: The data to be flattened
    :type data: dict
    :param parent_key: The key to be concatenated with.
    :type parent_key: str
    :param sep: Seperator between concatenated keys.
    :type sep: str
    :returns: The flattened dictionary.
    :rtype: dict
    """
    items = {}
    for k, v in data.items():
        new_key = f"{parent_key}{sep}{k}" if parent_key else k
        if isinstance(v, dict):
            items.update(flatten_json(v, new_key, sep=sep))
        else:
            items[new_key] = v
    return items

def flatten(transactions):
    # 2. convert into dataframe
    # Appliquer la fonction de désimbriquation à chaque élément dans les données
    flattened_data = [flatten_json(item) for item in transactions]

    # Créer un DataFrame à partir des données désimbriquées
    df = pd.DataFrame(flattened_data)

    # Afficher les premières lignes du DataFrame
    df.head()
    df=df.drop(['_source_events'],axis=1)

    df1=pd.read_csv('./csv_TKYC2.csv')

    df2=pd.read_csv('./token_final.csv')

    df3=pd.read_csv('./MultiversX_-_etiquette-2.csv',sep=';')
    df3=df3.drop(['Catégorie - 2'],axis=1)
    df3=df3.drop(['Unnamed: 5'],axis=1)
    df3=df3.drop(['Unnamed: 6'],axis=1)
    df3

    df = pd.merge(df1, df2, left_on='_source_receiver', right_on='owner', how='left')

    df[df['ticker'].notna()]

    # Change Multi Type in one Type

    # +
    # Step 2: Handle Varied Data Types

    # Check unique data types in the '_source_value' column
    unique_value_types = df['_source_value'].apply(type).unique()

    # Try to convert '_source_value' to numeric, if possible
    try:
        df['_source_value'] = pd.to_numeric(df['_source_value'], errors='coerce')
        conversion_success = True
    except Exception as e:
        conversion_success = False
        conversion_error = str(e)

    
    # Check for null values after conversion
    null_values_after_conversion = df['_source_value'].isnull().sum()

    # Step 3: Handle Nested Data

    # Check unique data types in the '_source_receivers' column
    unique_receivers_types = df['_source_receivers'].apply(type).unique()

    (unique_value_types, conversion_success, null_values_after_conversion, unique_receivers_types)

    
    # Create column

    # +
    # Identify columns that contain string representations of lists or arrays
    potential_list_cols = []

    # Check if a string represents a list (by checking the first and last characters)
    def is_list_str(s):
        return isinstance(s, str) and s.startswith("[") and s.endswith("]")

    # Check each column for potential list strings
    for col in df.columns:
        if any(df[col].apply(is_list_str).fillna(False)):
            potential_list_cols.append(col)

    import ast

    # Function to convert string representation of list to actual list
    def str_to_list(s):
        try:
            return ast.literal_eval(s)
        except (ValueError, SyntaxError):
            return [s]

    # Function to extract up to first 5 elements of a list
    def extract_up_to_5(lst):
        return lst[:5] + [None] * (5 - len(lst))

    # Apply transformations and create new columns
    for col in potential_list_cols:
        # Convert string lists to actual lists
        df[col] = df[col].apply(lambda x: str_to_list(x) if pd.notna(x) else x)
        
        # Extract up to first 5 elements
        df[col] = df[col].apply(lambda x: extract_up_to_5(x) if isinstance(x, list) else [x] + [None] * 4)
        
        # Create new columns
        expanded_col = pd.DataFrame(df[col].tolist(), columns=[f"{col}_{i}" for i in range(1, 6)])
        df = pd.concat([df, expanded_col], axis=1)
        
        # Drop original column
        df = df.drop(columns=[col])

    print(df.head())

    df = pd.merge(df, df3, left_on='_source_tokens_1', right_on='TICKER', how='left')

    # Drop si plus de 99% données manquantes

    # +
    # Find columns with more than 99% NaN values
    nan_threshold = 0.99 * len(df)
    columns_to_drop = df.columns[df.isna().sum() > nan_threshold].tolist()

    # Drop identified columns
    df_cleaned = df.drop(columns=columns_to_drop)

    # Display identified columns and info of the cleaned DataFrame
    (columns_to_drop, df_cleaned.info())    

    return df_cleaned