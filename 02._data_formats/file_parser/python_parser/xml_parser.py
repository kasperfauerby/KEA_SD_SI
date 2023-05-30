import xml.etree.ElementTree as ET

file = ET.parse('../../car/car.xml')



for elem in file.iter():
    print(elem.tag, elem.text)