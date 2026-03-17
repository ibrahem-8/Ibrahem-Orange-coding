//* Task 1

// let str1 = "Hello ";
// let str2 = "World";

// console.log(str1.concat(str2));
//////////////////////////////////////////////////
//* Task 2

// let str = "JavaScript";
// console.log(str.length);
//////////////////////////////////////////////////
//* Task 3

// let str = "Programming";
// console.log(str.charAt(0));
//////////////////////////////////////////////////
//* Task 4

// let str = "coding is fun";
// console.log(str.slice(0, 6));
//////////////////////////////////////////////////
//* Task 5

// let str = "cat";
// console.log(str.replace("a", "e"));
//////////////////////////////////////////////////
//* Task 6

// let str = "javascript";
// console.log(str.toUpperCase());
//////////////////////////////////////////////////
//* Task 7

// let str = "apple,banana,orange";
// console.log(str.split(","));
//////////////////////////////////////////////////
//* Task 8

// let str = ["hello", "world"];
// console.log(str.join(" "));
//////////////////////////////////////////////////
//* Task 9

// let str = " hello world ";
// console.log(str.trim());
//////////////////////////////////////////////////
//* Task 10

// let str = "hello world";
// console.log(str.includes("world"));
//////////////////////////////////////////////////
//* Task 11

// let str = "hello";
// let str1 = str.split("");
// console.log(str1.reverse().join(""));
//////////////////////////////////////////////////
//* Task 12

// let str = "elephant";
// let str1 = str.split("");
// console.log(str1.filter(n => n =="e").length);
//////////////////////////////////////////////////
//* Task 13

// let str = "racecar";
// let str1 = str.split("").reverse().join("");
// let result = str === str1;
// console.log(result);
//////////////////////////////////////////////////
//* Task 14

// let str = "hello world";
// console.log(str.split(" ").map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(" "));
//////////////////////////////////////////////////
//* Task 15

// let num = 1234.5678;
// console.log(num.toFixed(2));
//////////////////////////////////////////////////
//* Task 16

// let str = "There are 3 apples and 2 oranges";
// console.log(str.match(/\d+/g));
//////////////////////////////////////////////////
//* Task 17

// let email = "example@email.com";

// let emailPattern = /\w*@email\.com/;
// console.log(emailPattern.test(email));
//////////////////////////////////////////////////
//* Task 18

// let str = "This is a bad word";

// console.log(str.replace("bad", "good"));
//////////////////////////////////////////////////
//*Task 19

// let str = "aabbc";
// let result = [];

// for (let index = 0; index < str.length; index++) {
//     if (result.includes(str[index])) {
//         continue;
//     }else {
//         result.push(str[index]);
//     }
// }
// console.log(result.join(""));
//////////////////////////////////////////////////
//* Task 20

// let str = "hello";

// console.log(str.split("").sort().join(""));
//////////////////////////////////////////////////
//* Task 21

// let str = "listen";
// let str1 = "silent";

// let result = str.split("").sort().join("");
// let result1 = str1.split("").sort().join("");

// console.log(result === result1);
//////////////////////////////////////////////////
//* Task 22

// let str = "The quick brown fox";

// console.log(str.split(" ").reverse().join(" "));
//////////////////////////////////////////////////
// Task 23

// let str = "Web developments is fascinating";
// let arr = str.split(" ");
// let result = arr[0];

// for (let index = 1; index < arr.length; index++) {
//     if (result.length > arr[index].length) {
//         continue;
//     }else {
//         result = arr[index];
//     }
// }
// console.log(result);
//////////////////////////////////////////////////
//* Task 24

// let str = "A man, a plan, a canal, Panama!";

// let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
// let reverse = clean.split("").reverse().join("");
// console.log(clean === reverse);
//////////////////////////////////////////////////
//* Task 25

// let str = "mississippi";
// let arr = str.split("");
// let countM = 0;
// let countI = 0;
// let countS = 0;
// let countP = 0;
// for (let index = 0; index < arr.length; index++) {
//     switch (arr[index]) {
//         case "m":
//             countM += 1;
//             break;
    
//         case "i":
//             countI += 1;
//             break;
    
//         case "s":
//             countS += 1;
//             break;
    
//         case "p":
//             countP += 1;
//             break;
//     }
// }
// console.log(`m:${countM}, i:${countI}, s:${countS}, p:${countP}`);
//////////////////////////////////////////////////
//* Task 26

// let str = "Hello World";
// let result = str.replaceAll("a", 1).replaceAll("e", 2).replaceAll("i", 3).replaceAll("o", 4).replace("u", 5);
// console.log(result);
//////////////////////////////////////////////////
//* Task 27


// let str = "JavaScript is fun";
// console.log(str.startsWith("Java"));
//////////////////////////////////////////////////
//* Task 28

// let str = "image.png";
// console.log(str.endsWith("png"));
//////////////////////////////////////////////////
//* Task 29

// let str = "ha";
// console.log(str.repeat(3));
//////////////////////////////////////////////////
//* Task 30

// let str = "Hello World";
// console.log(str.indexOf("o"));