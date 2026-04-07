// *Task1

// const { createElement } = require("react");

// let input = document.querySelector("input");
// let button = document.querySelector("button");
// let output = document.querySelector("p");

// button.addEventListener("click", function () {
//     let text = input.value;
//     localStorage.setItem("name", text);
//     output.textContent = text;
// });
/////////////////////////////////////////////////////////
// *Task2

// let submit = document.getElementById("btn");
// let output = document.querySelector("p");

// function showData() {
//     let storedData = JSON.parse(localStorage.getItem("userData"));
//     if (storedData) {
//         output.textContent = `Name: ${storedData.names}, Email: ${storedData.email}`;
//     } else {
//         output.textContent = "No data found";
//     }}

// showData();
// submit.addEventListener("click", function() {
//     let names = document.getElementById("name").value;
//     let email = document.getElementById("email").value;

//     let user = {
//         names: names,
//         email: email
//     };

//     localStorage.setItem("userData", JSON.stringify(user));
//     showData();
// });
/////////////////////////////////////////////////////////
// *Task3


let users = [
    { name: "Ahmad" },
    { name: "Ali" },
    { name: "Sara" },
    { name: "Lana" }
];

localStorage.setItem("users", JSON.stringify(users));

let input = document.querySelector("#search");
let output = document.querySelector(".result");
let clear = document.querySelector("#clear");

function showResults(searchValue) {
    output.innerHTML = "";

    let filtered = users.filter(u =>
        u.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    filtered.forEach(u => {
        let div = document.createElement("div");
        div.textContent = u.name + " ";

        // إنشاء زر Delete
        let btn = document.createElement("button");
        btn.textContent = "Delete";

        // عند الضغط على Delete
        btn.addEventListener("click", function() {
            // حذف المستخدم من الـ array
            users = users.filter(user => user.name !== u.name);
            // تحديث localStorage
            localStorage.setItem("users", JSON.stringify(users));
            // إعادة عرض النتائج
            showResults(input.value);
        });

        div.appendChild(btn);
        output.appendChild(div);
    });
}

showResults("");

input.addEventListener("input", function() {
    showResults(input.value);
});

clear.addEventListener("click", function() {
    input.value = "";
    showResults("");
});