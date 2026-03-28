// *Task2

// let flags = {
//     jordan: "./jordan.png",
//     usa: "./USA.png"
// }
// let select = document.querySelector("select");
// let img = document.querySelector("img");

// select.addEventListener("change", function (e) {
//     let country = e.target.value;
//     img.src = flags[country];
// })
///////////////////////////////////////////////////////////
// *Task3

// let btnSh = document.querySelector("#show");
// let para = document.querySelector("p");
// let btnHi = document.querySelector("#hide");

// btnSh.addEventListener("click", function() {
//     para.classList.remove("hide");
//     btnHi.classList.remove("hide");
// });
// btnHi.addEventListener("click", function() {
//     para.classList.add("hide");
//     btnHi.classList.add("hide");
// });
///////////////////////////////////////////////////////////
// *Task4

// let textArea = document.getElementById("textArea");
// let boldCheck = document.getElementById("boldCheck");
// let underlineCheck = document.getElementById("underlineCheck");
// let fontSelect = document.getElementById("fontSelect");
// let fontSize = document.getElementById("fontSize");

// boldCheck.addEventListener("change", function () {
//     textArea.style.fontWeight = boldCheck.checked ? "bold" : "normal";
// });

// underlineCheck.addEventListener("change", function () {
//     textArea.style.textDecoration = underlineCheck.checked ? "underline" : "none";
// });

// fontSelect.addEventListener("change", function () {
//     textArea.style.fontFamily = fontSelect.value;
// });

// fontSize.addEventListener("input", function () {
//     textArea.style.fontSize = fontSize.value + "px";
// });
///////////////////////////////////////////////////////////
// *Task5

// let box = document.getElementById("box");
// box.addEventListener("click", function() {
//     box.style.backgroundColor = "blue";
// });