import csv
with open('../../02._data_formats/car/car.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)