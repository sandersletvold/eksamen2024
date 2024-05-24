CREATE TABLE IF NOT EXISTS Books (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(50),
    author VARCHAR(30),
    releaseYear INTEGER,
    rating DOUBLE PRECISION,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Users
(
    id INTEGER AUTO_INCREMENT,
    firstname VARCHAR(20),
    lastname VARCHAR(30),
    dateOfBirth INTEGER,
    phoneNumber CHAR(8),
    email VARCHAR(50),
    password VARCHAR(255),
    PRIMARY KEY (id)
);