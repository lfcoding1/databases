const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection = require ('./connect')
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// connect to database
connection.connect();
 
// default route
app.get('/', function (req, res) {
    return res.send({message: 'ToDo app' })
});

//show all todos in list
app.get('/todos', function (req, res) {
  connection.query('SELECT * FROM tasks', function (error, results, fields) {
      if (error) throw error;
      return res.send({results});
  });
});
//get an id with a certain id
app.get('/todo/:id', function (req, res) {
  let task_id = req.params.id;
  if (!task_id) {
      return res.status(400).send({ error: true, message: 'Please provide task_id' });
  }
  connection.query('SELECT * FROM tasks where id=?', task_id, function (error, results, fields) {
      if (error) throw error;
      return res.send({list: results[0]});
  });
});


//search items by keyword
app.get('/todos/search/:keyword', function (req, res) {
  let keyword = req.params.keyword;
  connection.query("SELECT * FROM tasks WHERE task LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
      if (error) throw error;
      return res.send({ list: results});
  });
});

//insert into todo list
app.post('/todo', function (req, res) {
  let task = req.body.task;
  if (!task) {
      return res.status(400).send({ error:true, message: 'Please provide task' });
  }
  connection.query("INSERT INTO tasks SET ? ", { task: task }, function (error, results, fields) {
      if (error) throw error;
      return res.send({list: results, message: 'New task added'});
  });
});

//delete an item
app.delete('/todo', function (req, res) {
  let task_id = req.body.task_id;
  if (!task_id) {
      return res.status(400).send({ error: true, message: 'Please provide task_id' });
  }
  connection.query('DELETE FROM tasks WHERE id = ?', [task_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({list: results, message: 'Task updated' });
  });
}); 

//update a todo with an id
app.put('/todo', function (req, res) {
  let task_id = req.body.task_id;
  let task = req.body.task;
  if (!task_id || !task) {
      return res.status(400).send({ error: task, message: 'Please provide task and task_id' });
  }
  connection.query("UPDATE tasks SET task = ? WHERE id = ?", [task, task_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({list: results, message: 'Task ID updated' });
  });
});

 
app.listen(8080, function () {
    console.log('Node app is running on port 8080.  Go to http://localhost:8080/todos to see your list');
});