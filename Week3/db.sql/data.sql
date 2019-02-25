/*create todo list*/
CREATE TABLE todo (
	    id INT AUTO_INCREMENT,
        item VARCHAR(100) NOT NULL,
        PRIMARY KEY (id));



DELIMITER //
CREATE PROCEDURE createItem
BEGIN   
    id INT AUTO_INCREMENT,
    text TEXT,
    completed_BOOLEAN NOT NULL DEFAULT FALSE,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
END
DELIMITER //

/*display data from todo list*/
DELIMITER //
CREATE PRODCEDURE showTodo
BEGIN
    SELECT * FROM ?
END
DELIMITER //

/*add some users sample data*/
INSERT INTO users (first_name, last_name) VALUES (?, ?);
INSERT INTO users (first_name, last_name) VALUES (?, ?);
INSERT INTO users (first_name, last_name) VAlUES (?, ?);
INSERT INTO users (first_name, last_name) VAlUES (?, ?);


/*add some users?*/
let sql = "SELECT * FROM ?? WHERE ?? = ?";
let inserts = ['users', 'id', userId];
sql = mysql.format(sql, inserts);