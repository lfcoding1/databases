const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')
const db2 = require('./list')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Todo App' })
  })

app.get('/users', db.showUsers) //works
app.post('/users', db.createUser) 
app.post('/todo/:create', db2.createItem)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

  app.listen(port, () => {
    console.log(`Server running on ${port}.`)
  })
  