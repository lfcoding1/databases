const mysql = require ('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hyfuser',
    database: 'todo'
  });
  
module.exports = connection;
  