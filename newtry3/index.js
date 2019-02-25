const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mysql = require('mysql');
const config = require('./config')
let connection = mysql.createConnection(config);

function createItem(task) {
    let task = [];
app.post('/addTask', function (req, res) {
    let newTask = req.body.newTask;
    console.log(newTask);
    task.push(newTask);
    res.redirect("/");
    connection.query("INSERT INTO todo (item) VALUES (?)", [task], (err, results) => {
        if (err) {
            throw err;
        }
        console.log("new item added to list: " + results)
        Response.status(200).send("newItem added to list: " + results)
    })
  });
}

let task = ["buy socks", "do a todo app"];
app.post('/addTask', function (req, res) {
    let newTask = req.body.newTask;
    task.push(newTask);
    res.redirect("/");
  });



app.get('/', function (req, res) {
  res.render("index", { task: task });
});



app.listen(3000, function () {
  console.log('Listening on port 3000')
});

app.set('view engine', 'ejs');