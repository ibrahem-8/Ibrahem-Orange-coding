// ### 🟢 Task 1 — DOM Structure Analysis

// Create a simple HTML page.

// 🎯 Requirements:

// - Log:
//     - All children elements
//     - First and last child
//     - Siblings of a specific element

// *solution :-

// let main = document.querySelector(".parent");
// let children = main.children;
// console.log(children);

// console.log(main.firstElementChild);
// console.log(main.lastElementChild);

// let item = document.querySelector("h1");
// console.log(item.previousElementSibling);
/////////////////////////////////////////////////////////////
// ### 🟢 Task 2 — Dynamic Content Builder

// 🎯 Requirements:

// - Using JavaScript only:
//     - Create a **card** that includes:
//         - Title
//         - Description
//         - Image
// - ❌ Do NOT write it in HTML
// - ✅ It must be fully created using JS

// *solution :-

// let card = document.createElement("div");
// card.classList.add("card");
// let title = document.createElement("h2");
// title.textContent = "Ibrahem";
// let description = document.createElement("p");
// description.textContent = "Hi all";
// let image = document.createElement("img");
// image.src = "./programmer.jpeg";

// card.append(title);
// card.append(description);
// card.prepend(image);

// document.body.append(card);
/////////////////////////////////////////////////////////////
// ### 🟢 Task 3 — DOM Traversing Challenge

// 🎯 Requirements:

// - Given a nested structure (div → ul → li...):
// - Access a specific element:

// ❌ Without using `querySelector`

// ✅ Using only:

// - parent
// - children
// - siblings

// *solution :-

// let parent = document.body.children[0];
// let child = parent.children[0];
// let child2 = child.children[0];

// console.log(child2.nextElementSibling);
/////////////////////////////////////////////////////////////
// ### 🟢 Task 4 — Replace & Update

// 🎯 Requirements:

// - Replace an existing element with a new one
// - Update text content
// - Modify classes

// *solution :-

// let parent = document.body.children[0];
// let child = parent.children[0];
// let child2 = child.children[0];
// let  ele = document.createElement("p")
// ele.textContent = "Ibrahem";
// ele.classList.add("para");

// let rep = child.replaceChild(ele, child.children[1]);
