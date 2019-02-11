'use strict'
let mysql = require('mysql');
let MySQLEvents = require('mysql-events');


let connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfuser",
    database: "new_world",
});

let dsn = {
    host: "localhost",
    user: "hyfuser",
    password: "hyfuser",
    database: "new_world",
}

let mysqlEventWatcher = MySQLEvents(dsn);



/*let query = connection.query("INSERT INTO countrylanguage (countrycode, language) VALUES ('AGO', 'Polish')", function (err, results, fields){
    if (err) throw err;
    console.log(results);
    console.log('insert added to countrylanguage table'); 
}); */

let watcher = mysqlEventWatcher.add(
    'new_world.countrylanguage.language.value',
    function(language, event) {
        if (countrycode === 'AGO' && language (COUNT < 10)) {
            "INSERT INTO countrylanguage (countrycode, language) VALUES ('AGO', 'Polish')";
        }
        if ( countrycode === 'AGO' && language (COUNT >= 10)) {
            "INSERT INTO countrylanguage (countrycode, language) VALUES ('AGO', 'Polish')";
            console.log('There are now 10 or more entries in this field')
        }
    }
);

/*let queryremove = connection.query("DELETE FROM countrylanguage WHERE countrycode = 'AGO' AND language = 'Polish'", function (err, results){
    if (err) throw err;
    console.log(results);
    console.log('insert has been removed countrylanguage table'); 
});
connection.end();*/

