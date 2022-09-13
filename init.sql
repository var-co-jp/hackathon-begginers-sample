
DROP DATABASE chatapp;
DROP USER 'testuser'@'localhost';

CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'testuser';
CREATE DATABASE chatapp;
USE chatapp
GRANT ALL ON chatapp TO 'testuser'@'localhost';

CREATE TABLE users (
    uid varchar(255) PRIMARY KEY,
    user_name varchar(255) UNIQUE NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL
);

CREATE TABLE channels (
    id serial PRIMARY KEY,
    name varchar(255) UNIQUE NOT NULL,
    abstract varchar(255)
);

CREATE TABLE messages (
    id serial PRIMARY KEY,
    uid varchar(255) REFERENCES users(uid),
    cid integer REFERENCES channels(id) ON DELETE CASCADE,
    message text,
    created_at timestamp not null default current_timestamp
);

