from fastapi import FastAPI

from converter import *

app = FastAPI()

@app.get("/")   
def read_root():
    return {"Hello": "World"}

# #Pip install pandas 
# @app.get("/csv")
# def convertCSV():
#     return csvConverter()

#pip install xmltodict
@app.get("/xml")
def convertXML(): 
    return xml()