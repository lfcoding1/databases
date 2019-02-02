'use strict';

let mysql = require('mysql');

//ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY '';
let connection = mysql.createConnection({
    host:  'localhost',
    user: 'root',
    password: 'hyfpassword',
    database: 'myworld'
});

//connect to the mysql server
connection.connect((err) => {
    if (err) {
       console.log('an error occured: ' + err.message);
    } 

    let createTableCountry = "CREATE TABLE if not exists countries (name VARCHAR(255), population VARCHAR(255), continent VARCHAR(255))"
    connection.query(createTableCountry, ( (err, results, fields) =>{
        if (err) {
            console.log('an error occured: ' + err.message);
        }
            console.log('table created');
    }));
    
    let createTableCity = "CREATE TABLE if not exists cities (name VARCHAR(255), population VARCHAR(255), country VARCHAR(255))"
    connection.query(createTableCity,  ((err, results, fields) => {
        if (err) {
            console.log('an error occured: ' + err.message);
        }
            console.log('table created');
    }));

    connection.end(function(err){
        if (err) {
            return console.log(err.message);
        }
    })
});