CREATE DATABASE StoreDB;

USE StoreDB;

CREATE TABLE Users (
    Id INT Primary Key,
    Name VARCHAR(50),
    Email VARCHAR(100),
    Age INT
);

CREATE TABLE Orders (
    Id INT Primary Key,
    UserId INT,
    ProductName VARCHAR(100),
    Price DECIMAL(10,2)
);

--Task 1

Insert Into Users (Id, Name, Email, Age)
Values
(1,'Ahmad','ahmad@gmail.com',25),
(2,'Ali','ali@gmail.com', 30),
(3,'Sara','sara@gmail.com',22);

--Task 2

Insert Into Orders(Id, UserId, ProductName, Price)
Values
(1,1, 'Laptop',800),
(2,2,'Phone', 500),
(3,1,'Mouse',20),
(4,3, 'Keyboard',50);

--Task 3

INSERT INTO Users (Id, Name, Age)
VALUES (4,'Omar',28);

--Task 4

Update Users
Set Email = 'sara_new@gmail.com'
where Name = 'Sara';

--Task 5

Update Orders
set Price +=10;

--Task 6

Update Users
Set Name = 'Ali Ahmad'
where Id = 2;

--Task 7

DELETE FROM Users
WHERE Id=4;

--Task 8

DELETE FROM Orders
WHERE Price<50;

--Task9

DELETE FROM Orders
WHERE UserId=3;

--Task 10 

select * from Users;

--Task 11

select Name, Email from Users

--Task 12

select * from Users
where Age > 25;

-- Task 13

select * from Users
where Name Like 'A%';

--Task 14

select * from Users
where Email = null;

--Task 15

select * from Orders
where Price Between 50 and 800;

--Task 16

select * from Orders
where ProductName Like 'phone';

-- Task 17

select * from Orders
order by Price Desc;

--Task 18

select * from Users
where Age< 30
order by Name;

--Task 19

select * from Orders
where Price>100 And UserId = 1;

--Task 20

select * from Users
where Age between 20 and 40 And Name like '%a%';