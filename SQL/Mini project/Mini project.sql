create database ECommerce_system

use ECommerce_system;

create table users (
id int Identity(1,1) primary key,
U_name nvarchar(40) not null,
email nvarchar(70) not null unique,
PasswordHash NVARCHAR(255) NOT NULL,
phoneNumber nvarchar(20) unique null,
IsDeleted BIT DEFAULT 0,
CreatedAt DATETIME DEFAULT GETDATE(),
UpdatedAt DATETIME NULL
)

create table categories (
id int Identity(1,1) primary key,
C_name nvarchar(50) not null,
IsDeleted BIT DEFAULT 0,
CreatedAt DATETIME DEFAULT GETDATE(),
UpdatedAt DATETIME NULL
)

create table products (
id int Identity(1,1) primary key,
CategoryId int not null,
P_name nvarchar(50) not null,
price decimal(10,2) not null,
stock int not null,
IsDeleted BIT DEFAULT 0,
CreatedAt DATETIME DEFAULT GETDATE(),
UpdatedAt DATETIME NULL,
foreign key (CategoryId) references categories(id)
)

create table orders (
id int Identity(1,1) primary key,
userId int not null,
status nvarchar(20) not null, 
IsDeleted BIT DEFAULT 0,
CreatedAt DATETIME DEFAULT GETDATE(),
UpdatedAt DATETIME NULL,
foreign key (userId) references users(id)
)

CREATE INDEX idx_orders_userId
ON Orders(userId);

create table orderItems (
id int Identity(1,1) primary key,
orderId int not null,
productId int not null,
quantity int not null,
price decimal(10,2) not null,
IsDeleted BIT DEFAULT 0,
CreatedAt DATETIME DEFAULT GETDATE(),
UpdatedAt DATETIME NULL,
foreign key (orderId) references orders(id),
foreign key (productId) references products(id)
)

create table reviews (
id int Identity(1,1) primary key,
userId int not null,
productId int not null,
comment nvarchar(500),
rating int not null,
CHECK (rating BETWEEN 1 AND 5),
IsDeleted BIT DEFAULT 0,
CreatedAt DATETIME DEFAULT GETDATE(),
UpdatedAt DATETIME NULL,
foreign key (userId) references users(id),
foreign key (productId) references products(id)
)

create table wishlist (
id int Identity(1,1) primary key,
userId int not null,
productId int not null,
UNIQUE (userId, productId),--Composite Unique Constraint
IsDeleted BIT DEFAULT 0,
CreatedAt DATETIME DEFAULT GETDATE(),
UpdatedAt DATETIME NULL,
foreign key (userId) references users(id),
foreign key (productId) references products(id)
)

CREATE TABLE payment (
id INT IDENTITY(1,1) PRIMARY KEY,
orderId INT NOT NULL UNIQUE,
amount DECIMAL(10,2) NOT NULL,
method NVARCHAR(20) NOT NULL,
status NVARCHAR(20) NOT NULL,
PaymentDate DATETIME DEFAULT GETDATE(),
IsDeleted BIT DEFAULT 0,
CreatedAt DATETIME DEFAULT GETDATE(),
UpdatedAt DATETIME NULL,
FOREIGN KEY (OrderId) REFERENCES Orders(Id)
);
-----------------------------------------------------------------------

INSERT INTO users (U_name, Email, PasswordHash, PhoneNumber)
VALUES 
('Ali Ahmed', 'ali@gmail.com', 'hash123', '0790000001'),
('Sara Ali', 'sara@gmail.com', 'hash456', '0790000002');

INSERT INTO categories (C_name)
VALUES 
('Electronics'),
('Books'),
('Clothing');

INSERT INTO products (P_name, Price, Stock, CategoryId)
VALUES 
('iPhone 14', 999.99, 10, 1),
('Laptop HP', 750.50, 5, 1),
('Novel Book', 15.00, 50, 2);

INSERT INTO orders (userId, status)
VALUES 
(1, 'Pending'),
(2, 'Paid');

INSERT INTO orderItems (orderId, productId, quantity, price)
VALUES 
(1, 1, 1, 999.99),
(1, 3, 2, 15.00),
(2, 2, 1, 750.50);

INSERT INTO reviews (userId, productId, comment, rating)
VALUES 
(1, 1, 'Excellent phone!', 5),
(2, 2, 'Good laptop', 4);

INSERT INTO wishlist (userId, productId)
VALUES 
(1, 2),
(1, 3),
(2, 1);

INSERT INTO payment (orderId, amount, method, status)
VALUES 
(2, 750.50, 'card', 'paid');

UPDATE orders
SET Status = 'paid',
UpdatedAt = GETDATE()
WHERE Id = 1;

UPDATE products
SET IsDeleted = 1,
UpdatedAt = GETDATE()
WHERE Id = 3;

------------------------------------------------------
--Get all orders with user information
select orders.id, orders.status,orders.CreatedAt,users.U_name,users.email from orders
inner join users on orders.userId = users.id

--Show available products (not deleted) sorted by price
select * from products 
where IsDeleted = 0
order by price;

--Get products with their average rating
SELECT products.id, products.P_name,AVG(CAST(reviews.rating AS FLOAT)) AS AvgRating
FROM products
LEFT JOIN reviews ON products.id = reviews.productId
GROUP BY products.id,products.P_name;

--Get all products in a specific user’s wishlist
SELECT products.id, products.P_name, products.price
FROM wishlist
INNER JOIN products ON wishlist.productId = products.id
WHERE wishlist.userId = 1;

--Get total sales per user
SELECT users.id, users.U_name, SUM(orderItems.quantity * orderItems.price) AS TotalSales
FROM users
INNER JOIN orders ON users.id = orders.userId
INNER JOIN orderItems ON orders.id = orderItems.orderId
GROUP BY users.id, users.U_name;

--Get products within a price range
SELECT products.id, products.P_name, products.price
FROM products
WHERE products.price BETWEEN 100 AND 800;

--Get last 5 orders
SELECT TOP 5 *
FROM orders
ORDER BY orders.CreatedAt DESC;