CREATE DATABASE user_db;

CREATE TABLE  users(
    user_id serial PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    age INT NOT NULL,
);