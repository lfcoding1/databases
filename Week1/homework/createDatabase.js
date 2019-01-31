'use strict';

let mysql = require('mysql');

//ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'poop';
let connection = mysql.createConnection({
    host:  'localhost',
    user: 'root',
    password: 'hyfpassword',
});

connection.connect((err) => {
    if (err) {
       console.log('an error occured: ' + err.message);
    } 
    let createDatabase = "CREATE DATABASE if not exists myworld"
    connection.query(createDatabase, ( (err, results) =>{
        if (err) {
            console.log('an error occured: ' + err.message);
        }
            console.log('database created');
    }));
    connection.end(function(err){
        if (err) {
            return console.log(err.message);
        }
    })
});