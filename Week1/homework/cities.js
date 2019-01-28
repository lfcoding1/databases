'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
    host:  'localhost',
    user: 'root',
    password: 'poop',
    database: 'myworld'
});

connection.connect((err)=>{
    if (err) throw err;
    console.log ("connected");
 
    let sqlCities = "INSERT INTO cities (name, population, country) VALUES ?";   
    let cityValues = [
        ['Paris', '12 million', 'France'],
        ['Beijing', '20 million', 'China'],
        ['Washington DC', '7.6 million', 'United States'],
        ['Brasilia', '2.4 million', 'Brazil'],
        ['Moscow', '12 million', 'Russia'],
        ['Tokyo', '13.8 million', 'Japan'],
        ['Berlin', '3.5 million', 'Germany'],
        ['Dodoma', '410 thousand', 'Tanzania'],
        ['Buenos Aires', '15 million', 'Argentina'],
        ['Warsaw', '1.7 million', 'Poland'],
        ['Canberra', '390 thousand', 'Australia'],
        ['Colombo', '5.6 million', 'Sri Lanka'],       
    ];

    connection.query(sqlCities, [cityValues], ((err) => {
        if (err) throw err;
        console.log('records inserted into table');
    }));
});

