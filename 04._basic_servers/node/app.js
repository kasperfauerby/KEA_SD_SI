import express, { json } from "express";
const app = express();

import fs from "fs";

app.get("/", (req, res) => {
    res.send("Hello World");
    }
);

app.get("/txt", (req, res) => {
    
    
    // Read the TXT file
    const txtData = fs.readFileSync('../car/car.txt', 'utf8');

    // Convert the TXT data to a JavaScript object
    var textByLine = txtData.split(",")

    // Write the JSON data to a new file
    fs.writeFileSync('../car/convertertoJson/txtTo.json', JSON.stringify(textByLine));
    
        for (let key in textByLine) 
            `${key}: ${textByLine[key]}`;
            
            

    res.send(textByLine)


}); 


app.get("/yaml", (req, res) => {
    
    // Read the TXT file
    const txtData = fs.readFileSync('../car/car.yaml', 'utf8');

    // Convert the TXT data to a JavaScript object
    var textByLine = txtData.split(",")

    // Write the JSON data to a new file
    fs.writeFileSync('../car/convertertoJson/yamlTo.json', JSON.stringify(textByLine));
    
        for (let key in textByLine) 
            `${key}: ${textByLine[key]}`;
            

    res.send(textByLine)

});


app.get("/json", (req, res) => {
    
    // Read the TXT file
    const txtData = fs.readFileSync('../car/car.json', 'utf8');

    // Convert the TXT data to a JavaScript object
    var textByLine = txtData.split(",")

    // Write the JSON data to a new file
    fs.writeFileSync('../car/convertertoJson/jsonTo.json', JSON.stringify(textByLine));
    
        for (let key in textByLine) 
            `${key}: ${textByLine[key]}`;
            

    res.send(textByLine)

});



app.listen(3000, () => {
    console.log("The application is running on localhost:3000!");
    }
);