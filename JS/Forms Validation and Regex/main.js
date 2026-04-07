// *Task 1+2

let form = document.querySelector("form");
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let email = document.getElementById("email");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let fNameInput = fName.value;
    let lNameInput = lName.value;
    let emailInput = email.value;

    let fNameOutput =document.querySelector(".first")
    let lNameOutput =document.querySelector(".last")
    let emailOutput =document.querySelector(".email")

    fNameOutput.textContent = "First Name: " + fNameInput;
    lNameOutput.textContent = "Last Name: " + lNameInput;
    emailOutput.textContent = "Email: " + emailInput;

})
///////////////////////////////////////////////////////////////