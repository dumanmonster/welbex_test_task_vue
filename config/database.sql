CREATE DATABASE welbex;

CREATE TABLE
    welbextable(
        id SERIAL PRIMARY KEY,
        date TIMESTAMP,
        name VARCHAR(255),
        amount BIGINT,
        distance BIGINT
    );