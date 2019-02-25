let mysql = require('mysql');
let config = require('./config.js')

let connection = mysql.createConnection(config);

const showUsers = () => {
    return new Promise (resolve => {
        connection.query('SELECT * FROM users ORDER BY id', (err, results) => {
            if (err) {
                throw err
            }
            console.log(results)
            resolve(results)
    })
    })
}

function createUser(first_name, last_name) {
    connection.execute('INSERT INTO `user` VALUES (?,?)', [first_name, last_name], function(error, results, fields){
       if (error) throw error;
       console.log(fields[0]); 
    });
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
const createUser = () => {
    return new Promise (resolve => {
        connection.query("INSERT INTO users (first_name, last_name) VALUES (?, ?)", [process.argv[2], process.argv[3]], (err, results) => {
            if (err) {
                throw err
            }
            console.log(results)
            resolve(results)
    })
    })
}
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id)
  
    connection.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
      if (err) {
        throw err
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  } 

  module.exports = {
    showUsers,
    createUser,
    updateUser,
    deleteUser,
  }