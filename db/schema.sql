-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE category (
  category_id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (category_id)
);

INSERT INTO category (category_name) VALUES
  ('Toys'),
  ('Books'),
  ('Clothes');

-- Setup the info for individual products
CREATE TABLE product (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  price DECIMAL(12, 2) NOT NULL,
  stock INT NOT NULL DEFAULT 10,
  category_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES category(category_id)
);

INSERT INTO product (product_name, price, stock, category_id) VALUES
  ('Crimson Gladiator', 9.99, 25, 1),
  ('How to Rule the World - For Dummies', 15, 10, 2),
  ('Wolf-Grey Jordan 5', 349.99, 3, 3);

-- SELECT * FROM category;
SELECT * FROM product;