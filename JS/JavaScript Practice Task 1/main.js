//* Task 1 – Calculator Program

// let operation = prompt("Enter the operation");
// let num1 = Number(prompt("Enter the First Number"));
// let num2 = Number(prompt("Enter the Second Number"));
// let result;

// if (operation === "+") {
//     result = num1 + num2;
// }else if (operation === "-") {
//     result = num1 - num2;
// }else if (operation === "*") {
//     result = num1 * num2;
// }else if (operation === "/") {
//     result = num1 / num2;
// }else {
//     console.log("invalid operation")
// }

// console.log (result);
// document.write(`${num1} ${operation} ${num2} = ${result}`)
/////////////////////////////////////////////////////////////////
//* Task 2 – Marks Program

// let mark = prompt("Enter your Mark");

// if (mark < 50){
//     document.write("Fail");
// }else if (mark >= 50 && mark <= 59){
//     document.write("D");
// }else if (mark >= 60 && mark <= 69){
//     document.write("C");
// }else if (mark >= 70 && mark <= 79){
//     document.write("B");
// }else if (mark >= 80 && mark <= 89){
//     document.write("A");
// }else if (mark >= 90 && mark <= 100){
//     document.write("A+");
// }else {
//     document.write("Invalid Mark");
// }
/////////////////////////////////////////////////////////////////
//* Task 3 – Using π Constant

// const PI = 3.14159; 

// let radius = Number(prompt("Enter the radius of the circle:"));

// let area = PI * radius * radius;

// let circumference = 2 * PI * radius;

// console.log(`Radius: ${radius}`);
// console.log(`Area of the circle: ${area}`);
// console.log(`Circumference of the circle: ${circumference}`);
/////////////////////////////////////////////////////////////////
//* Task 4 – Simple Condition

// let x = Number(prompt("Enter the First Number"));
// let y = Number(prompt("Enter the Second Number"));

// if (x > y) {
//     alert("Hello World");
//     console.log("Hello World");
//     document.write("Hello World");
// }else {
//     alert("Goodbye");
//     console.log("Goodbye");
//     document.write("Goodbye");
// }
/////////////////////////////////////////////////////////////////
//* Task 5 – Type Conversion

// let operation = prompt("+ or *")
// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// let sum;
// let multiplication;

// if (operation === "+") {
//     sum = num1 + num2;
//     console.log(`sum: ${sum}`);
//     document.write(`sum: ${sum}`);
// }else if (operation === "*") {
//     multiplication = num1 * num2;
//     console.log(`Multiplication: ${multiplication}`);
//     document.write(`Multiplication: ${multiplication}`);
// }
/////////////////////////////////////////////////////////////////
//* Task 6 – User Information (Template Literals)

// let name = prompt("Enter your Name");
// let age = prompt("Enter your Age");
// let city = prompt("Enter your City");

// console.log(`Hello ${name}!
// You are ${age} years old and you live in ${city}.`);

// document.write(`Hello ${name}!
// You are ${age} years old and you live in ${city}.`);

// alert(`Hello ${name}!
// You are ${age} years old and you live in ${city}.`);
/////////////////////////////////////////////////////////////////
//* Task 7 – Even or Odd Number

// let num = Number(prompt("Enter the Number"));

// if (num % 2 == 0) {
//     alert(`The number ${num} is Even`)
// }else {
//     alert(`The number ${num} is odd`)
// }
/////////////////////////////////////////////////////////////////
//* Task 8 – Age Category

// let age = prompt("Enter your Age");

// if (age < 13){
//     alert("Child");
//     console.log("Child");
// }else if (age >= 13 && age <= 19){
//     alert("Teenager");
//     console.log("Teenager");
// }else if (age >= 20 && age <= 59){
//     alert("Adult");
//     console.log("Adult");
// }else if (age >= 60) {
//     alert("Senior");
//     console.log("Senior");
// }
/////////////////////////////////////////////////////////////////
//* Task 9 – Simple Login System

// let userName = prompt("Enter your Username");
// let password = prompt("Enter your Password");

// if (userName === "admin" && password === "1234") {
//     alert("Login Successful");
//     console.log("Login Successful");
// }else {
//     alert("Invalid Username or Password");
//     console.log("Invalid Username or Password");
// }