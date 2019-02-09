'use strict';

const mysql = require('mysql');
const fs = require('fs');




class Database {
    constructor(config){
        this.connection = mysql.createConnection({
            host:  'localhost',
            user: 'root',
            password: 'hyfpassword',
            database: 'new_world'
        });
    }
    query(sql, args){
        return new Promise( (resolve, reject) => {
            this.connection.query(sql, args, (err, rows) =>{
                if (err)
                    return reject (err);
                resolve(rows);
            });     
    });
}; //end query

close() {
    return new Promise((resolve, reject) => {
        this.connection.end( err =>{
            if (err)
                return reject(err);
            resolve();
        });
    });
}; //end close
}; //end Database
let cities;
let population;
let surfaceArea;
let topPop;
let worldPop;

let database = new Database();
    database.query('SELECT city.name FROM city INNER JOIN country ON city.countrycode = countrycode WHERE country.name = "Netherlands"')
        .then(rows => {
            cities = rows;
            fs.appendFile('answers.txt', 'Question 6, answer: ' +  JSON.stringify(cities, null, 1), function (err) {
                if (err) throw err;
                console.log('Updated Question 6!');
                console.log(cities);
              });
            return database.query('SELECT Name, Population FROM city WHERE Name = "Rotterdam"');
        })
        .then(rows => {
            population = rows;
            fs.appendFile('answers.txt', '\n' + 'Question 7, answer: ' + '\n' + JSON.stringify(population, null, 1), function (err) {
                if (err) throw err;
                console.log('Updated Question 7!');
                console.log(population);
            });
            return database.query('SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10');
        })
        .then(rows => {
            surfaceArea = rows;
            fs.appendFile('answers.txt', '\n' + 'Question 8, answer: ' + '\n' + JSON.stringify(surfaceArea, null, 1), function (err) {
                if (err) throw err;
                console.log('Updated Question 8!');
                console.log(surfaceArea);
            });
            return database.query('SELECT Name FROM city ORDER BY Population DESC LIMIT 10 ');
        })
        .then(rows => {
            topPop = rows;
            fs.appendFile('answers.txt', '\n' + 'Question 9, answer: ' + '\n' + JSON.stringify(topPop, null, 1), function (err) {
                if (err) throw err;
                console.log('Updated Question 9!');
                console.log(topPop);
            });
            return database.query('SELECT SUM(Population) FROM country');
        })
        .then(rows => {
            worldPop = rows;
            fs.appendFile('answers.txt', '\n' + 'Question 10, answer: ' + '\n' + JSON.stringify(worldPop, null, 1), function (err) {
                if (err) throw err;
                console.log('Updated Question 10!');
                console.log(worldPop);
            });
        }),
        err => {
            return database.close().then(()=> { throw err;}) 
        .then(() => {
            console.log(rows);   
        })
        .catch(err => {
            console.log('an error occured with your request: ' + err.message)
        });
    };

    
    
     
