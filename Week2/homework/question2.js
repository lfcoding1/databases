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


//question 2:  List all the languages spoken in the region Y (Accept Y from user)

let query = connection.query("SELECT DISTINCT countrylanguage.language FROM countrylanguage INNER JOIN country ON country.code = countrylanguage.countrycode WHERE country.Region = ?", [userInput], function (err, results, fields){
    if (err) throw err;
    console.log(results); 
});
    
//output: example Middle East
/*RowDataPacket { language: 'Arabic' },
  RowDataPacket { language: 'Hindi' },
  RowDataPacket { language: 'Armenian' },
  RowDataPacket { language: 'Azerbaijani' },
  RowDataPacket { language: 'Lezgian' },
  RowDataPacket { language: 'Russian' },
  RowDataPacket { language: 'English' },
  RowDataPacket { language: 'Greek' },
  RowDataPacket { language: 'Turkish' },
  RowDataPacket { language: 'Abhyasi' },
  RowDataPacket { language: 'Georgiana' },
  RowDataPacket { language: 'Osseetti' },
  RowDataPacket { language: 'Assyrian' },
  RowDataPacket { language: 'Kurdish' },
  RowDataPacket { language: 'Persian' },
  RowDataPacket { language: 'Hebrew' },
  RowDataPacket { language: 'Circassian' },
  RowDataPacket { language: 'French' },
  RowDataPacket { language: 'Balochi' },
  RowDataPacket { language: 'Urdu' },
  RowDataPacket { language: 'Soqutri' } ]
*/