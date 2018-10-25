DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('cup', 'kitchen', 10, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('spoon', 'kitchen', 3, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('pot', 'kitchen', 26, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('pillow', 'home', 30, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('ipad', 'electronics', 300, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('quilt', 'home', 44, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('lamp', 'home', 15, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('earphone', 'electronics', 100, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('drawer', 'home', 22, 38);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('basket', 'home', 16, 60);