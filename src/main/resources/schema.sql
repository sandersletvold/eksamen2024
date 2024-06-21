CREATE TABLE Users (
    id INTEGER AUTO_INCREMENT,
    firstname VARCHAR(20),
    surname VARCHAR(20),
    phoneNumber VARCHAR(16),
    email VARCHAR(40),
    password VARCHAR(255),
    birthDate DATE,
    PRIMARY KEY (id)
);

CREATE TABLE Books (
    ISBN VARCHAR(13),
    title VARCHAR(50),
    author VARCHAR(30),
    releaseYear INTEGER,
    rating DOUBLE,
    PRIMARY KEY (ISBN)
);