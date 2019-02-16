'use strict';

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfuser",
    database: "new_world",
});


let userInput = console.log('More than 10 entries');
let allowedInput = console.log('entry updated')
let query = connection.query("CREATE TRIGGER language AFTER INSERT ON countrylanguage FOR EACH  ROW BEGIN IF NEW.language (COUNT >= 10) THEN SET @userInput = ?; ELSE SET @allowedInput = ?; END IF; INSERT INTO countrylanguage (countrycode, language) VALUES ('AGO', 'ARMENIAN')", [userInput, allowedInput], function (err, results){
  if (err) throw err;
  console.log(results);
});  


