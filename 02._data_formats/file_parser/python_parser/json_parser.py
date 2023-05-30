import json
from types import SimpleNamespace

f = open('../../car/car.json')
  

data = json.load(f)

for i in data['car_details']:
    print(i)
  


f.close()