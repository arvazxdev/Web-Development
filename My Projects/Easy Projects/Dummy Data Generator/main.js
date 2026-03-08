const express = require('express');
const mg = require('mongoose');
const Employee = require('./models/Employee.js');
const app = express();
const port = 3000;

mg.connect("mongodb://localhost:27017/company");

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/generate', async (req, res) => {

    function getRandom(arr) {
        let rand = Math.floor(Math.random() * 5);
        return arr[rand];
    }

    await Employee.deleteMany();

    let names = ["John", "Jane", "Doe", "Smith", "Emily",];
    let cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
    for (let index = 1; index < 11; index++) {
        let e = await Employee.create({
            name: getRandom(names),
            salary: Math.floor(Math.random() * 100000),
            city: getRandom(cities),
            isManager: Math.random() > 0.5 ? true : false,
        });

    
    }


    res.sendFile('index.html', { root: __dirname });

});

app.listen(port, () => {
    console.log(`Example app is listenig on port ${port}`);
});