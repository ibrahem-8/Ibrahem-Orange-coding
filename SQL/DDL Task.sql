CREATE DATABASE online_store;

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

ALTER TABLE users
ADD email VARCHAR(150) NOT NULL UNIQUE;

CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT NOT NULL DEFAULT 1,

    PRIMARY KEY (order_id, product_id),

    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE categories (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    manager_id INT,
    
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);

ALTER TABLE users
ADD phone NVARCHAR(10);

ALTER TABLE users
DROP COLUMN phone;

ALTER TABLE users
ALTER COLUMN name NVARCHAR(200);

CREATE TABLE customers (
    id INT PRIMARY KEY,
    name NVARCHAR(150) NOT NULL,
    phone NVARCHAR(20) NULL
);

CREATE TABLE payments (
    id INT PRIMARY KEY,
    order_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE students (
    id INT PRIMARY KEY,
    name NVARCHAR(50) NOT NULL
);

CREATE TABLE courses (
    id INT PRIMARY KEY,
    title NVARCHAR(200) NOT NULL
);

CREATE TABLE student_courses (
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    PRIMARY KEY (student_id, course_id),

    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE logs (
    id INT PRIMARY KEY,
    message NVARCHAR(500) NOT NULL,
    log_time DATETIME DEFAULT GETDATE()
);

TRUNCATE TABLE logs;

ALTER TABLE users
ADD phone NVARCHAR(10);
ALTER TABLE users
DROP COLUMN phone;

DROP TABLE logs;

CREATE TABLE increamant_id (
    id INT IDENTITY(1,1) PRIMARY KEY
);

CREATE TABLE example_table (
    required_column NVARCHAR(150) NOT NULL,
    optional_column NVARCHAR(150) NULL
);

CREATE TABLE books (
    id INT PRIMARY KEY,
    title NVARCHAR(20) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

CREATE TABLE authors (
    id INT PRIMARY KEY,
    name NVARCHAR(20) NOT NULL
);
ALTER TABLE books
ADD author_id INT,
FOREIGN KEY (author_id) REFERENCES authors(id);

CREATE TABLE only_ids (
    id INT IDENTITY(1,1) PRIMARY KEY
);

CREATE TABLE example1_table (
    id INT PRIMARY KEY,
    number_column INT NOT NULL,
    text_column NVARCHAR(200) NOT NULL,
    date_column DATETIME NOT NULL
);

CREATE TABLE example2_table (
    id INT PRIMARY KEY,
    username NVARCHAR(20) NOT NULL,
    email NVARCHAR(50) NOT NULL
);
ALTER TABLE example2_table
ADD CONSTRAINT UQ_example UNIQUE (email);