DROP DATABASE IF EXISTS `storedb`;
CREATE DATABASE `storedb`;
USE `storedb`;

CREATE TABLE store (
    store_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    deals VARCHAR(60) NOT NULL,
    department ENUM('accessories', 'video game', 'computers', 'TV') DEFAULT 'TV',
    year YEAR,
    description TINYTEXT,
    image TINYTEXT,
    price decimal (5, 2),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_store PRIMARY KEY (store_id)
);

