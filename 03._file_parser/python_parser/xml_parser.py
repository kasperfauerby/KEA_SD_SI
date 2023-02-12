import xml.etree.ElementTree as ET

file = ET.parse('../../02._data_formats/car/car.xml')



for elem in file.iter():
    print(elem.tag, elem.text)