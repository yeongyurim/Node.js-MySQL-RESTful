CREATE TABLE user (
    id varchar(32) NOT NULL PRIMARY KEY,
    pw varchar(32) NOT NULL,
    name varchar(20) NOT NULL,
    birth DATE,
    phone varchar(20) NOT NULL
);
