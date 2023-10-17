def calculate_profile(address, df_cleaned):
    print(df_cleaned.head())

    filtered_data = df_cleaned # [df_cleaned['identifiant'] == address]
    filtered_data=filtered_data[filtered_data['Catégorie - 1'].notna()]

    category_percentage = (filtered_data['Catégorie - 1'].value_counts() / filtered_data.shape[0]) * 100    

    return category_percentage