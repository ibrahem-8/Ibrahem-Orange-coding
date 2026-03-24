/*
 * Exercise 1
 *
 * Double each number in the array
 *
 * Test Case:
 * console.log(doubleNumbers([1,2,3]))
 *
 * Result:
 * [2,4,6]
*/
// function doubleNumbers(arr){
//     return arr.map(ele => ele * 2);
// }
// console.log(doubleNumbers([1,2,3]))
///////////////////////////////////////////////////////////
/*
 * Exercise 2
 *
 * Convert numbers to strings
 *
 * Test Case:
 * console.log(numbersToStrings([1,2,3]))
 *
 * Result:
 * ["1","2","3"]
*/
// function numbersToStrings(){
//     let arr = [1,2,3];
//     return arr.map(ele => ele.toString());
// }
// console.log(numbersToStrings());
///////////////////////////////////////////////////////////
/*
 * Exercise 3
 *
 * Make all names uppercase
 *
 * Test Case:
 * console.log(upperCaseNames(["ali","sara"]))
 *
 * Result:
 * ["ALI","SARA"]
*/
// function upperCaseNames(){
//     let arr = ["ali","sara"];
//     return arr.map(ele => ele.toUpperCase());
// }
// console.log(upperCaseNames());
///////////////////////////////////////////////////////////
/*
 * Exercise 4
 *
 * Add 5 to each number
 *
 * Test Case:
 * console.log(addFive([10,20,30]))
 *
 * Result:
 * [15,25,35]
*/
// function functionaddFive(){
//     let arr = [10,20,30];
//     return arr.map(ele => ele + 5);
// }
// console.log(functionaddFive());
///////////////////////////////////////////////////////////
/*
 * Exercise 5
 *
 * Get only the name from objects
 *
 * Test Case:
 * console.log(getNames([
 * {name:"Ali",age:20},
 * {name:"Sara",age:25}
 * ]))
 *
 * Result:
 * ["Ali","Sara"]
*/
// function getNames(){
//     let arr = [{name:"Ali",age:20},{name:"Sara",age:25}];
//     return arr.map(ele => ele.name);
// }
// console.log(getNames());
///////////////////////////////////////////////////////////
/*
 * Exercise 6
 *
 * Return the length of each word
 *
 * Test Case:
 * console.log(wordLengths(["apple","dog"]))
 *
 * Result:
 * [5,3]
*/
// function wordLengths(){
//     let arr = ["apple","dog"];
//     return arr.map(ele => ele.length);
// }
// console.log(wordLengths());
///////////////////////////////////////////////////////////
/*
 * Exercise 7
 *
 * Multiply each number by its index
 *
 * Test Case:
 * console.log(valTimesIndex([2,3,4]))
 *
 * Result:
 * [0,3,8]
*/
// function valTimesIndex(){
//     let arr = [2,3,4];
//     return arr.map((ele, i) => ele * i);
// }
// console.log(valTimesIndex());
///////////////////////////////////////////////////////////
/*
 * Exercise 8
 *
 * Create array of usernames starting with "@"
 *
 * Test Case:
 * console.log(makeUsernames([
 * {username:"ahmad"},
 * {username:"sara"}
 * ]))
 *
 * Result:
 * ["@ahmad","@sara"]
*/
// function makeUsernames(){
//     let arr = [{username:"ahmad"}, {username:"sara"}];
//     return arr.map(ele => `@${ele.username}`);
// }
// console.log(makeUsernames());
///////////////////////////////////////////////////////////
/*
 * Exercise 9
 *
 * Create array of squares
 *
 * Test Case:
 * console.log(squareNumbers([2,3,4]))
 *
 * Result:
 * [4,9,16]
*/
// function squareNumbers(){
//     let arr = [2,3,4];
//     return arr.map(ele => ele * ele);
// }
// console.log(squareNumbers());
///////////////////////////////////////////////////////////
/*
 * Exercise 10
 *
 * Convert words to their first letter
 *
 * Test Case:
 * console.log(firstLetters(["Ali","Sara"]))
 *
 * Result:
 * ["A","S"]
*/
// function firstLetters(){
//     let arr = ["Ali","Sara"];
//     return arr.map(ele => ele[0]);
// }
// console.log(firstLetters());
///////////////////////////////////////////////////////////
/*
 * Exercise 11
 *
 * Count total sum using forEach
 *
 * Test Case:
 * console.log(sumNumbers([10,20,30]))
 *
 * Result:
 * 60
*/
// function sumNumbers(){
//     let arr = [10,20,30];
//     let result = 0;
//     arr.forEach(ele => result+=ele)
//     console.log(result);
// }
// sumNumbers();
///////////////////////////////////////////////////////////
/*
 * Exercise 12
 *
 * Count how many numbers are even
 *
 * Test Case:
 * console.log(countEven([1,2,3,4]))
 *
 * Result:
 * 2
*/
// function countEven(){
//     let arr = [1,2,3,4];
//     let result = 0;
//     arr.forEach(ele => {
//         if (ele % 2 === 0) {
//             result+=1;
//         }
//     });
//     console.log(result);
// }
// countEven();
///////////////////////////////////////////////////////////
/*
 * Exercise 13
 *
 * Create array where each number becomes number * 10
 *
 * Test Case:
 * console.log(timesTen([1,2,3]))
 *
 * Result:
 * [10,20,30]
*/
// function timesTen(){
//     let arr = [1,2,3];
//     return arr.map(ele => ele * 10);
// }
// console.log(timesTen());
///////////////////////////////////////////////////////////
/*
 * Exercise 14
 *
 * Add property "adult" depending on age
 *
 * Test Case:
 * console.log(addAdult([
 * {name:"Ali",age:20},
 * {name:"Sara",age:15}
 * ]))
 *
 * Result:
 * [
 * {name:"Ali",age:20,adult:true},
 * {name:"Sara",age:15,adult:false}
 * ]
*/
// function addAdult(){
//     let arr = [{name:"Ali",age:20},{name:"Sara",age:15}];
//     arr.forEach(ele => {
//         ele.adult = ele.age >= 18;
//     });
//     return arr;
// }
// console.log(addAdult());
///////////////////////////////////////////////////////////
/*
 * Exercise 15
 *
 * Create array of prices after adding 10 tax
 *
 * Test Case:
 * console.log(addTax([100,200]))
 *
 * Result:
 * [110,210]
*/
// function addTax(){
//     let arr = [100,200];
//     let arr1 = [];
//     arr.forEach(ele => {
//         arr1.push(ele + 10);
//     });
//     return arr1;
// }
// console.log(addTax());
///////////////////////////////////////////////////////////
/*
 * Exercise 16
 *
 * Count how many numbers are greater than 50
 *
 * Test Case:
 * console.log(countBig([20,60,80]))
 *
 * Result:
 * 2
*/
// function countBig(num){
//     let arr = [20,60,80];
//     let result = 0;
//     arr.forEach(ele => {
//         if (ele > num) {
//             result += 1;
//         }
//     });
//     return result;
// }
// console.log(countBig(50));
///////////////////////////////////////////////////////////
/*
 * Exercise 17
 *
 * Convert numbers to "Number: X"
 *
 * Test Case:
 * console.log(labelNumbers([5,10]))
 *
 * Result:
 * ["Number: 5","Number: 10"]
*/
// function labelNumbers(){
//     let arr = [5,10];
//     let arr1 = [];
//     arr.forEach(ele => {
//         arr1.push("Number: " + ele)
//     });
//     return arr1;
// }
// console.log(labelNumbers());
///////////////////////////////////////////////////////////
/*
 * Exercise 18
 *
 * Get product names
 *
 * Test Case:
 * console.log(productNames([
 * {product:"Laptop",price:1000},
 * {product:"Phone",price:500}
 * ]))
 *
 * Result:
 * ["Laptop","Phone"]
*/
// function productNames() {
//     let arr = [{product:"Laptop",price:1000},{product:"Phone",price:500}];
//     return arr.map(ele => ele.product);
// }
// console.log(productNames());
///////////////////////////////////////////////////////////
/*
 * Exercise 19
 *
 * Create array where each number becomes number + index
 *
 * Test Case:
 * console.log(addIndex([5,5,5]))
 *
 * Result:
 * [5,6,7]
*/
// function addIndex() {
//     let arr = [5,5,5];
//     let arr1 =[];

//     arr.forEach((ele, i) =>{
//         arr1.push(ele + i);
//     })
//     return arr1
// }
// console.log(addIndex());
///////////////////////////////////////////////////////////
/*
 * Exercise 20
 *
 * Create array of boolean values (true if even)
 *
 * Test Case:
 * console.log(isEvenArray([1,2,3,4]))
 *
 * Result:
 * [false,true,false,true]
*/
// function isEvenArray() {
//     let arr = [1,2,3,4];
//     let arr1 =[];

//     arr.forEach(ele =>{
//         if (ele % 2 === 0) {
//             arr1.push(true)
//         }else {
//             arr1.push(false)
//         }
//     })
//     return arr1
// }
// console.log(isEvenArray());