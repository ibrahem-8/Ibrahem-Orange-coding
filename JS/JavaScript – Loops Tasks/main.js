//* Task 1

// let numbers = [];
// for (let i = 1; i <= 10; i++) {
//     numbers.push(i);
// }
// console.log(numbers.join("-"));
///////////////////////////////////////////////
//* Task 2

// let result = 0;
// for (let index = 0; index <= 30; index++) {
//     result += index;
// }
// console.log(result);
///////////////////////////////////////////////
//* Task 3

// for (let index = 1; index <= 50; index++) {
//     if (index % 2 == 0) {
//         console.log(index);
//     }else {
//         continue;
//     }
// }
///////////////////////////////////////////////
//* Task 4

// for (let index = 10; index > 0; index--) {
//     console.log(index);
// }
///////////////////////////////////////////////
//* Task 5

// for (let i = 0; i < 5; i++) {
//   let row = "";

//   for (let j = 0; j < 5; j++) {
//     if (j < 5 - i) {
//       row += "A ";
//     } else {
//       row += String.fromCharCode(65 + i) + " ";
//     }
//   }

//   console.log(row);
// }
///////////////////////////////////////////////
//* Task 6

// for (let i = 0; i < 5; i++){
//     let row = "";
//     for (let j = 1; j <= 5; j++){
//         if (j < 5 -i) {
//             row += 1 + " ";
//         }else {
//             row += (1 + i) + " ";
//         }
//     }
//     console.log(row)
// }
///////////////////////////////////////////////
//* Task 7

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) {
//         if (i === j) {
//             row += i + " ";
//         }else {
//             row += 0 + " ";
//         }
//     }
//     console.log(row);
// }
///////////////////////////////////////////////
//* Task 8

// let num = 5;
// let result = 1;

// for (let index = 1; index <= num; index++) {
//     result *= index;
// }
// console.log(result);
///////////////////////////////////////////////
//* Task 9


// let a = 0;
// let b = 1;
// let result = 0;

// for (let index = 0; index < 20; index++) {
//     console.log(a);
//     result = a + b;
//     a = b;
//     b = result;
// }
///////////////////////////////////////////////
//* Task 10 

// let str = "Orange Coding School";
// let result = 0;

// let str1 =str.toLocaleLowerCase();
// for (let index = 0; index < str.length ; index++) {
//     if (str1[index] === "c") {
//         result += 1
//     }
// }
// console.log(result);
///////////////////////////////////////////////
//* Task 11

// let result = 0;
// for (let index = 1; index <= 5; index++) {
//     for (let j = 1; j <= 5; j++) {
//         result = index * j;
//         console.log(`${index} * ${j} = ${result}`)
//     }
// }
///////////////////////////////////////////////
