// ## 🟢 Task 1 — Smart Button

// 🎯 Requirements:

// - Create a button
// - On click:
//     - Change text (e.g., "Clicked!")
//     - Toggle a class

// ### Expected Behavior:

// - First click → change text + add class
// - Second click → restore original state

//* Solution :-

// let btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//     if (btn.classList.contains("active")) {
//         btn.classList.remove("active");
//         btn.textContent = "Click Me!"
//     }else {
//         btn.classList.add("active");
//         btn.textContent = "Clicked"
//     }
// })

//* Another Solution :-

// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     let isActive = btn.classList.toggle("active");
//     btn.textContent = isActive ? "Clicked" : "Click Me!";
//     console.log(isActive)
// })
/////////////////////////////////////////////////////////////////////
// ## Task 2 — Live Input Preview

// 🎯 Requirements:

// - Input + paragraph

// ### Behavior:

// - While typing:
//     - Show the same text inside the paragraph

// 👉 focus:

// - `event.target.value`

//* Solution :-

// let input = document.querySelector("input");
// let para = document.querySelector("p");

// input.addEventListener("input", function(e) {
//     para.textContent = e.target.value;
// })
/////////////////////////////////////////////////////////////////////
// ## Task 3 — Interactive List

// 🎯 Requirements:

// - Input + Button + List

// ### Behavior:

// - Add item to list
// - Each item must include:
//     - Text
//     - Delete button

// ### Important:

// - ❌ Do NOT add event لكل عنصر
// - ✅ Use **Event Delegation**

//* Solution :-

// let input = document.querySelector("input");
// let addBtn = document.querySelector("button");
// let list = document.querySelector("ul");

// addBtn.addEventListener ("click", function() {
//     let text = input.value;
//     let li = document.createElement("li");
//     li.textContent = text + "   ";
//     let delBtn = document.createElement("button");
//     delBtn.textContent = "Delete";
//     li.append(delBtn);
//     list.append(li);
// })

// list.addEventListener("click", function(e) {
//     if (e.target.tagName === "BUTTON") {
//         e.target.parentElement.remove();
//     }
// });
/////////////////////////////////////////////////////////////////////
// ## Task 4 — Color Changer Cards

// 🎯 Requirements:

// - Create multiple cards

// ### Behavior:

// - When clicking a card:
//     - Change its background color
// - Only one card should be active at a time

// 👉 Hint:

// - Remove class from others

//* Solution :-

// let container = document.querySelector(".cards-container");
// container.addEventListener("click", function(e) {
//     if (e.target.classList.contains("card")) {
//         let allCards = container.querySelectorAll(".card")
//         allCards.forEach(c => c.classList.remove("active"))
//         e.target.classList.add("active")
//     }
// })
/////////////////////////////////////////////////////////////////////
// ## Task 5 — Toggle Visibility

// 🎯 Requirements:

// - Button + section

// ### Behavior:

// - Click:
//     - Show / hide section

// ### Two ways:

// - `classList.toggle`
// - `style.display`

//* Solution :-

// const button = document.querySelector("button");
// const section = document.querySelector("section");

// button.addEventListener("click", function() {
//     section.classList.toggle("hidden");
// });
/////////////////////////////////////////////////////////////////////
// ## 🟢 Task 6 — Counter with Styling

// 🎯 Requirements:

// - button -
// - button +
// - number

// ### Behavior:

// - Increase / decrease number
// - Change color:
//     - 0 → green
//     - < 0 → red
//     - = 0 → black

//* Solution :-

let decreaseBtn = document.getElementById("decreaseBtn");
let increaseBtn = document.getElementById("increaseBtn");
let numberEl = document.getElementById("number");
let count = 0;

function updateNumber() {
    numberEl.textContent = count;

    if (count > 0) {
        numberEl.style.color = "green";
    } else if (count < 0) {
        numberEl.style.color = "red";
    } else {
        numberEl.style.color = "black";
    }
}

increaseBtn.addEventListener("click", function() {
    count++;
    updateNumber();
});

decreaseBtn.addEventListener("click", function() {
    count--;
    updateNumber();
});