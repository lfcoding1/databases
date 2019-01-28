'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
    host:  'localhost',
    user: 'root',
    password: 'poop',
    database: 'myworld'
});

connection.connect((err)=>{
    if (err) throw err;
    console.log ("connected");
    let sql = "INSERT INTO countries (name, population, continent) VALUES ?";
    let values = [
        ['France', '67 million', 'Europe'],
        ['China', '1.4 billion', 'Asia'],
        ['United States', '322 million', 'Northern America'],
        ['Brazil', '207 million', 'South America'],
        ['Russia', '146 million', 'Europe'],
        ['Japan', '127 million', 'Asia'],
        ['Germany', '81 million', 'Europe'],
        ['Tanzania', '55 million', 'Africa'],
        ['Argentina', '43 million', 'South America'],
        ['Poland', '38 million', 'Europe'],
        ['Australia', '24 million', 'Oceania'],
        ['Sri Lanka', '20 million', 'Asia'],
    ];
    connection.query(sql, [values], ((err) => {
        if (err) throw err;
        console.log('records inserted into table');
    }));
});


