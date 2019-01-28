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

let landNames;
let betweenPop;
let population;
let european;
let surfaceAreaD;

let database = new Database();
    database.query('SELECT Name FROM country WHERE Population>=8000000')
        .then(rows => {
            population = rows;
            fs.appendFile('answers.txt', 'Question 1, answer: ' +  JSON.stringify(population, null, 1), function (err) {
                if (err) throw err;
                console.log('Updated Question 1!');
                console.log(population);
              });
            return database.query('SELECT Name FROM country WHERE Name LIKE "%land%"');
        })
        .then(rows => {
            landNames = rows;
            fs.appendFile('answers.txt', '\n' + 'Question 2, answer: ' + '\n' + JSON.stringify(landNames, null, 1), function (err) {
                if (err) throw err;
                console.log('Updated Question 2!');
                console.log(landNames);
            });
            return database.query('SELECT Name FROM country WHERE Population BETWEEN 500000 AND 1000000');
        })
        .then(rows => {
            betweenPop = rows;
            fs.appendFile('answers.txt', '\n' + 'Question 3, answer: ' + '\n' + JSON.stringify(betweenPop, null, 1), function (err) {
                if (err) throw err;
                console.log('Updated Question 3!');
                console.log(betweenPop);
            });
            return database.query('SELECT Name FROM country WHERE continent = "Europe"');
        })
        .then(rows => {
            european = rows;
            fs.appendFile('answers.txt', + '\n' + 'Question 4, answer: ' + '\n' + JSON.stringify(european, null, 1), function (err) {
                if (err) throw err;
                console.log('Updated Question 4!');
                console.log(european);
            });
            return database.query('SELECT Name FROM country ORDER BY SurfaceArea DESC');
        })
        .then(rows => {
            surfaceAreaD = rows;
            fs.appendFile('answers.txt', + '\n' + 'Question 5, answer: ' + '\n' + JSON.stringify(surfaceAreaD, null, 1), function (err){
                if (err) throw err;
                console.log('Updated Question 5!');
                console.log(surfaceAreaD);
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



   