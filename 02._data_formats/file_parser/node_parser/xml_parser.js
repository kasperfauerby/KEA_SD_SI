fs = require('fs');
var parser = require('xml2js');

fs.readFile( '../../car/car.xml', function(err, data) {
    var json = parser.toJson(data);
    console.log("to json ->", json);
 });