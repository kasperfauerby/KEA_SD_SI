import csv
with open('../../car/car.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)