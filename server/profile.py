def get_profile(address, df_cleaned):
    filtered_data = df_cleaned[address['identifiant'] == address]

    category_percentage = (filtered_data['Catégorie - 1'].value_counts() / filtered_data.shape[0]) * 100
    print(category_percentage)

    return category_percentage