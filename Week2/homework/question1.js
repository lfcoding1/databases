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


//question 1: What is the capital of country X ? (Accept X from user)
let userInput = process.argv[2];
let query = connection.query("SELECT city.Name, country.Capital FROM city INNER JOIN country ON city.ID = country.Capital WHERE country.Name = ?", [userInput], function (err, results, fields){
  if (err) throw err;
  console.log(results);  
});
//output: if userInput = France
//[ RowDataPacket { Name: 'Paris', Capital: 2974 } ]

 

       