//* Task 1 

// function firstAndLast() {
//     let arr = [1,2,3,4,5];
//     console.log(arr.slice(0, 1).concat(arr.slice(arr.length - 1)));
// }
// firstAndLast();
/////////////////////////////////////////////////////
//* Task 2

// function removeMiddle() {
//     let arr = [1,2,3,4,5];
//     arr.splice(arr.length/2, 1);
//     console.log(arr);
// }
// removeMiddle();
/////////////////////////////////////////////////////
//* Task 3

// function swapFirstLast() {
//     let arr = [1,2,3,4,5];
//     let a = arr[0];
//     let b = arr.length-1;
//     arr[0] = arr[b];
//     arr[b] = a
//     console.log(arr);
// }
// swapFirstLast();
/////////////////////////////////////////////////////
//* Task 4

// function insertAtMiddle () {
//     let arr = [1,2,3,4];
//     let a = 10;
//     let middle = arr.length/2;
//     arr.splice(middle,0,a);
//     console.log(arr);
// }
// insertAtMiddle();
/////////////////////////////////////////////////////
//* Task 5

// let arr = [1,2,3];
// console.log(arr.concat(arr));
/////////////////////////////////////////////////////
//* Task 6

// let arr = [1,2,2,3,4,4,5];
// let arr1 = [];

// function removeDuplicates() {
//     for (let index = 0; index < arr.length; index++) {
//         if (arr1.includes(arr[index])) {
//             continue;
//         }else {
//             arr1.push(arr[index]);
//         }
//     }
//     console.log(arr1)
// }
// removeDuplicates();
/////////////////////////////////////////////////////
//* Task 7 

// function findSecondLargest() {
//     let arr = [4,9,2,10,6];
//     let arrS = arr.sort();
//     console.log(arrS[arrS.length-1]);
// }
// findSecondLargest();
/////////////////////////////////////////////////////
//* Task 8

// function findSecondSmallest() {
//     let arr = [4,9,2,10,6];
//     let arrS = arr.sort();
//     console.log(arrS[2]);
// }
// findSecondSmallest();
/////////////////////////////////////////////////////
//* Task 9

// let arr = [10,5,20,3,8];
// function removeGreaterThan(arr1, a) {
//     return arr1.filter(ele => ele < a);
// }
// console.log(removeGreaterThan(arr, 10));
/////////////////////////////////////////////////////
//* Task 10

// let arr = [10,5,20,3,8];
// function removeLessThan(arr1, a) {
//     return arr1.filter(ele => ele >= a);
// }
// console.log(removeLessThan(arr, 10));
/////////////////////////////////////////////////////
//* Task 11

// let arr = [1,2,3,2,4,2];
// function countOccurrences(arr, num) {
//     return arr.filter(ele => ele === num).length;
// }
// console.log(countOccurrences(arr, 2));
/////////////////////////////////////////////////////
//* Task 12


// function arrayIntersection() {
//     let arr = [1,2,3,4];
//     let arr1 = [3,4,5,6];
//     return arr.filter( ele => arr1.includes(ele));
// }
// console.log(arrayIntersection())
/////////////////////////////////////////////////////
//* Task 13

// function arrayDifference() {
//     let arr = [1,2,3,4];
//     let arr1 = [3,4];
//     return arr.filter( ele => !arr1.includes(ele));
// }
// console.log(arrayDifference())
/////////////////////////////////////////////////////
//* Task 14

// function uniqueMerge() {
//     let arr = [1,2,3];
//     let arr1 = [3,4,5];
//     return [...new Set(arr.concat(arr1))]
// }
// console.log(uniqueMerge())
/////////////////////////////////////////////////////
//* Task 15 


// function removeNegativeNumbers() {
//     let arr = [5,-2,10,-3,7];
//     return arr.filter(ele => ele>=0)
// }
// console.log(removeNegativeNumbers());
/////////////////////////////////////////////////////
//* Task 16

// function wordsLongerThan(num) {
//     let arr = ["alex","mohammad","ali","sara"];
//     return arr.filter(ele => ele.length > num)
// }
// console.log(wordsLongerThan(4));
/////////////////////////////////////////////////////
//* Task 17 

// function countLetterInWords(char) {
//     let arr = ["apple","banana","car","dog"];

//     let result = arr.filter(ele => ele.includes(char));
//     console.log(result.length);
// }
// countLetterInWords("a");
/////////////////////////////////////////////////////
//* Task 18 

// function removeShortWords(num) {
//     let arr = ["apple","banana","car","dog"];
//     return arr.filter(ele => ele.length > num);
// }
// console.log(removeShortWords(4));
/////////////////////////////////////////////////////
//* Task 19

// function findLongestWord() {
//     let arr = ["apple","banana","car","dog"];
//     arr.sort((a,b) => b.length - a.length);
//     console.log(arr[0])
// }
// findLongestWord();
/////////////////////////////////////////////////////
//* Task 20 

// function findShortestWord() {
//     let arr = ["apple","banana","cars","dog"];
//     arr.sort((a,b) => a.length - b.length);
//     console.log(arr[0])
// }
// findShortestWord();
/////////////////////////////////////////////////////
//* Task 21 

// function sortByLength() {
//     let arr = ["apple","hi","banana"];
//     arr.sort((a,b) => a.length - b.length);
//     console.log(arr);
// }
// sortByLength();
/////////////////////////////////////////////////////
//* Task 22 

// function removeEverySecond() {
//     let arr = [1,2,3,4,5,6];
//     return arr.filter((el, i) => i % 2 ===0)
// }
// console.log(removeEverySecond());
/////////////////////////////////////////////////////
//* Task 23 

// function sumEvenNumbers() {
//     let arr = [1,2,3,4,5,6];
//     let result = 0;
//     return arr.filter(ele => ele%2 === 0).reduce((acc, cur) => acc + cur)
// }
// console.log(sumEvenNumbers());
/////////////////////////////////////////////////////
//* Task 24 

// function sumOddIndex() {
//     let arr = [1,2,3,4,5,6];
//     return arr.filter((ele, i) => i%2 !== 0).reduce((acc, cur) => acc + cur)
// }
// console.log(sumOddIndex());
/////////////////////////////////////////////////////
//* Task 25 

// function reverseWithoutReverse() {
//     let arr = [1,2,3,4,5,6];
//     let  result = []; 
//     for (let index = 0; index < arr.length; index++) {
//         result.unshift(arr[index])
//     }
//     console.log(result);
// }
// reverseWithoutReverse();
/////////////////////////////////////////////////////
//* Task 26

// function findMissingNumber() {
//     let arr = [1,2,3,5,6];
//     arr.sort((a, b) => a - b);
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] !== index+1) {
//             return index+1;
//         }
//     }
// }
// console.log(findMissingNumber());
/////////////////////////////////////////////////////
//* Task 27

// function pairSum() {
//     let arr = [2,7,11,15];
//     let target = 9;

//     for (let num of arr) {
//         let result = target - num;
//         if (arr.includes(result)) {
//             return [num, result];
//         }
//     }
// }
// console.log(pairSum());
/////////////////////////////////////////////////////
//* Task 28 

// function rotateArray(num) {
//     let arr = [1,2,3,4,5];
    
//     return arr.slice(-num).concat(arr.slice(0,-num));
// }
// console.log(rotateArray(2));
/////////////////////////////////////////////////////
//* Task 29 

// function chunkArray(num) {
//     let arr = [1,2,3,4,5,6];
//     let result = [];

//     for (let index = 0; index < arr.length; index += num) {
//         result.push(arr.slice(index, index + num));
//     }
//     console.log(result);
// }
// chunkArray(2);
/////////////////////////////////////////////////////
//* Task 30 


