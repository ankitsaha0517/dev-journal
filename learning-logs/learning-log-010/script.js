// Selecting Elements
let title = document.getElementById("title");
console.log(title);

let firstPara = document.querySelector(".para");
console.log(firstPara);

// Changing HTML
let title2 = document.getElementById("title");
title2.innerHTML = "Updated <span style='color:red;'>Title</span>";

let items = document.querySelectorAll("li");
items[0].remove();

// Changing CSS
let box2 = document.getElementById("box");
box2.style.backgroundColor = "blue";
box2.style.width = "200px";
box2.style.height = "200px";
box2.style.borderRadius = "10px";

// Event Listeners
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  console.log("Button was clicked!");
});

// innerHTML VS textContent
let demo = document.getElementById("title");
let demo2 = document.getElementById("title1");
demo.innerHTML = "<b>Bold Text</b> and <i>Italic Text</i>";

demo2.textContent = "<b>Bold Text</b> and <i>Italic Text</i>";
