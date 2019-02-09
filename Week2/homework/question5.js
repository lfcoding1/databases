'use strict';

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfuser",
    database: "new_world",
});


//5. List all the continents with the number of languages spoken in each continent
let query = connection.query("SELECT continent, COUNT(language)  FROM countrylanguage INNER JOIN country ON country.code = countrylanguage.countrycode GROUP BY country.continent; ", function (err, results){
    if (err) throw err;
    console.log(results); 
});
//output:
/*[ RowDataPacket { continent: 'North America', 'COUNT(language)': 109 },
  RowDataPacket { continent: 'Asia', 'COUNT(language)': 239 },
  RowDataPacket { continent: 'Africa', 'COUNT(language)': 310 },
  RowDataPacket { continent: 'Europe', 'COUNT(language)': 202 },
  RowDataPacket { continent: 'South America', 'COUNT(language)': 42 },
  RowDataPacket { continent: 'Oceania', 'COUNT(language)': 82 } ]
*/

