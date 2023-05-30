const fs = require("fs");
const readline = require("readline");

const stream = fs.createReadStream('../../car/car.csv');

const rl = readline.createInterface({ input: stream });
let data = [];

rl.on("line", (row) => {
    data.push(row.split(","));
});

rl.on("close", () => {
    console.log(data);
});