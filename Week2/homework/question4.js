'use strict';

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfuser",
    database: "new_world",
});


let userInput = process.argv[2] + ' ' + process.argv[3];
let input2 = process.argv[4];
let params = userInput + ' ' + input2;
let query = connection.query('SELECT name FROM country WHERE region IN (SELECT region FROM country WHERE name = ? AND code IN (SELECT countrycode FROM countrylanguage WHERE language = "French" AND isOfficial = "T"))', params, ((err, results) =>{
    if (err) throw err;
    console.log(results);  
  }));
  
