'use strict';

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfuser",
    database: "new_world",
});
let select = 'select co.continent, co.name, l.language from country co inner join countrylanguage l on co.code = l.countrycode where l.language in (select l.language from country c inner join countrylanguage l on c.code = l.countrycode where c.name = "France" and l.isofficial = "T") and co.continent = (select continent from country where name = "Barbados")';
  


let userInput = process.argv[2] + ' ' + process.argv[3];
let input2 = process.argv[4];
let params =userInput + ' ' + input2;
let query = connection.query(select, params, ((err, results) =>{
    if (err) throw err;
    console.log(results);  
  }));

  connection.end();


  