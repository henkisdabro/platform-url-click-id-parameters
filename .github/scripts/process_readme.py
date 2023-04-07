import pandas as pd
# Read the README.md file
with open('README.md', 'r') as file:
    data = file.read()
# Find the third markdown table
tables = pd.read_html(data, flavor=None)
third_table = tables[2]
# Extract the values of the first column and create a comma-separated list
first_column_values = third_table.iloc[:, 0].tolist()
csv_data = ','.join(map(str, first_column_values))
# Write the output to a new file
with open('output.csv', 'w') as output_file:
    output_file.write(csv_data)