let mysql = require('mysql');
let config = require('./config.js')

let connection = mysql.createConnection(config);

const getUsers = () => {
    return new Promise (resolve => {
        connection.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
            if (err) {
                throw err
            }
            console.log(results)
            resolve(results)
    })
    })
}

const getUserById = (req, res) => {
    let id = parseInt(req.params.id)

    connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            throw err
        }
        Response.status(200).json(results.row)
    })
}
const createItem = () => {
    return new Promise (resolve => {
        connection.query("INSERT INTO todo (item) VALUES (?)", [process.argv[2]], (err, results) => {
            if (err) {
                throw err
            }
            console.log(results)
            resolve(results)
    })
    })
}
   

const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const {first_name, last_name} =  req.body

    connection.query(
        'UPDATE users SET first_name = ?, email = ? WHERE id = ?',
        [first_name, last_name, id],
        (err, results) => {
            if (err) {
                throw err
            }
            Response.status(200).send('User updated with ID: ${id}')
        }
    )
}

const deleteItem = (req, res) => {
    const id = parseInt(req.params.id)
  
    connection.query('DELETE FROM todo WHERE id = ?', [id], (err, results) => {
      if (err) {
        throw err
      }
      response.status(200).send(`List Item deleted with ID: ${id}`)
    })
  } 

  module.exports = {
   
    createItem,
   
  }