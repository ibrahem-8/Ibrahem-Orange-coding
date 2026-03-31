// ### 1️⃣ Hoisting Trap

// ```
// console.log(a)
// var a=10
// ```

// 🔹 What will be printed?

// 🔹 Explain why.

// *Solution:-

//undefined; var make Hoisting
////////////////////////////////////////////
// ### 2️⃣ Temporal Dead Zone (TDZ)

// ```
// console.log(a)
// let a=10
// ```

// 🔹 What happens?

// 🔹 Explain TDZ.

// *Solution:-

// ReferenceError
////////////////////////////////////////////////////
// ### 3️⃣ Function vs Block Scope

// ```
// var x=1

// functiontest() {
// if (true) {
// var x=2
//   }
// console.log(x)
// }

// test()
// console.log(x)
// ```

// 🔹 What is the output?

// *Solution:-

// 2    1
///////////////////////////////////////////////////////
// ### 4️⃣ Shadowing + TDZ Trap

// ```
// let x=10

// function test() {
// console.log(x)
// let x=20
// }

// test()
// ```

// 🔹 What happens here?

// *Solution:-

// ReferenceError
///////////////////////////////////////////////////
// ### 5️⃣ Classic Closure Problem (var)

// for (var i=0;i<3;i++) {
// setTimeout(() =>console.log(i),0)
// }
// 🔹 What is the output?

// *Solution:-

//3 3 3
///////////////////////////////////////////////////
// ### 6️⃣ Closure with `let`

// ```
// for (let i=0;i<3;i++) {
// setTimeout(() =>console.log(i),0)
// }
// ```

// 🔹 What is the output?

// *Solution:-

//0 1 2
///////////////////////////////////////////////////
// ### 7️⃣ Nested Scope (Closure)

// ```
// var a=1

// function outer() {
// var a=2

// function inner() {
// console.log(a)
//   }

// inner()
// }

// outer()
// ```

// 🔹 What is the output?

// *Solution:-

// 2
///////////////////////////////////////////////////////
// ### 8️⃣ Re-declaration Error

// ```
// var a=10
// let a=20
// ```

// 🔹 What happens?

// *Solution:-

// SyntaxError
//////////////////////////////////////////////////////
// ### 9️⃣ Function Hoisting vs Variable Hoisting

// ```
// console.log(foo)

// var foo=10

// function foo() {
// return 20
// }
// ```

// 🔹 What is the output?

// *Solution:-

// ƒ foo() { return 20 }
////////////////////////////////////////////////////
// ### 🔟 Scope + Mutation

// ```
// let a=10

// function test() {
// a=20
// }

// test()
// console.log(a)
// ```

// 🔹 What is the output?

// *Solution:-

// 20
///////////////////////////////////////////////////
// ### 1️⃣1️⃣ Block Scope Leakage (`var`)

// ```
// {
// var a=10
// }

// console.log(a)
// ```

// 🔹 What is the output?

// *Solution

// 10
////////////////////////////////////////////////////
// ### 1️⃣2️⃣ Block Scope (`let`)

// ```
// {
// let a=10
// }

// console.log(a)
// ```

// 🔹 What happens?

// *Solution:-

// ReferenceError: a is not defined
////////////////////////////////////////////////////
// ### 1️⃣3️⃣ Parameter Shadowing

// ```
// leta=5

// functiontest(a) {
// console.log(a)
// }

// test(10)
// ```

// 🔹 What is the output?

// *Solution:-

// 10
////////////////////////////////////////////////////
// ### 1️⃣4️⃣ Closure + Async Trap

// ```
// function test() {
// for (var i=0;i<3;i++) {
// setTimeout(() =>console.log(i),100)
//   }
// }

// test()
// ```

// 🔹 What is the output?

// *Solution:-

// 3 3 3
//////////////////////////////////////////////////
// ### 1️⃣5️⃣ IIFE Fix (Advanced)

// ```
// for (var i=0;i<3;i++) {
//   (function(i) {
// setTimeout(() =>console.log(i),0)
//   })(i)
// }
// ```

// 🔹 What is the output?

// *Solution 

// 0 1 2