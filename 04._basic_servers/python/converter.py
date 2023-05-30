# Python program to convert text
# file to JSON
import json
import xmltodict
# import pandas as pd 


# def csvConverter(): 
#     csvFile = "../car/car.csv"
#     obj = pd.read_csv(csvFile, sep=",")
#     json_output = "../car/convertertoJson/csvTo.json"

#     obj.to_json(json_output, indent= 1)

#     with open(json_output, "r") as read_file:
#         data = json.load(read_file)
#     return data

def xml():

    with open("../car/car.xml") as xml_file:
        data_dict = xmltodict.parse(xml_file.read())
        
        # generate the object using json.dumps()
        # corresponding to json data
        json_data = json.dumps(data_dict)
        
        # Write the json data to output
        # json file
        with open("../car/convertertoJson/xmlTo.json", "w") as json_file:
            json_file.write(json_data)
            json_file.close()

    with open("../car/convertertoJson/xmlTo.json", "r") as read_file:
        data = json.load(read_file)
    return data
