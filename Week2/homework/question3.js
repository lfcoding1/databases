'use strict';

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfuser",
    database: "new_world",
});

let firstInput = process.argv[2];
let userInput2 = process.argv[3];
let userInput = firstInput + ' ' + userInput2;
console.log(userInput);

// 3. Find the number of cities in which language Z is spoken (Accept Z from user)

let query = connection.query("SELECT COUNT(*) FROM city INNER JOIN countrylanguage ON city.countryCode = countrylanguage.countryCode WHERE countrylanguage.language = ?", [userInput], function (err, results, fields){
    if (err) throw err;
    console.log(results); 
});

//example output: Creole English:
// [ RowDataPacket { 'COUNT(*)': 60 } ]