/*create database*/
DROP database IF EXISTS Todo;
CREATE DATABASE Todo;
USE Todo;

/*create usertable*/
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(62) NOT NULL,
    PRIMARY KEY (id)
)

/*Create todo list*/
CREATE TABLE todo (
	id INT AUTO_INCREMENT,
    item VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (first_name, last_name) VALUES ('louise', 'louise');