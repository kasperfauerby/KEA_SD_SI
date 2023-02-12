fs = require('fs');
var parser = require('xml2js');

fs.readFile( '../../02._data_formats/car/car.xml', function(err, data) {
    var json = parser.toJson(data);
    console.log("to json ->", json);
 });