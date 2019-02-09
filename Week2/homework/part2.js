'use strict';

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfuser",
    database: "new_world",
});

let alert = console.log('There are 10 or more than 10 languages for this country');
let query = connection.query("CREATE TRIGGER language BEFORE INSERT ON countrylanguage.language FOR EACH ROW BEGIN IF (countrylanguage.language >= 10 THEN " + alert + "END IF; END", [userInput], function (err, results, fields){
    if (err) throw err;
    console.log(results); 
});
