//var,let,const

// const: Cannot be reassigned (Use this by default)
const userName = "CodeLearner";
// userName = "NewName"; // ❌ This would throw an error!


// let: Can be reassigned (Use when values will change)
let currentScore = 0;
currentScore = 10; // ✅ Perfectly fine!


// var: The old way (Avoid using this in modern JS)
// 'var' doesn't respect block scope (like inside an if-statement or loop), 
// which can cause variables to "leak" and cause bugs.
if (true) {
  var leakyVariable = "I escaped the block!";
  let safeVariable = "I am trapped in the block!";
}
console.log(leakyVariable); // Prints: "I escaped the block!"
// console.log(safeVariable); // ❌ Throws a ReferenceError
// ---------------------------------------------------------


//The console Methods : 

// Standard output for general information
console.log("Welcome to Day 1 of JavaScript!");

// Used to highlight potential issues that won't break the code
console.warn("Watch out! You are running low on coffee.");

// Used to log critical errors or failures
console.error("Oh no! The server disconnected.");
// ---------------------------------------------------------


// Arithmetic Operators:
let a = 15;
let b = 4;

console.log("Addition:", a + b);       
console.log("Subtraction:", a - b);   
console.log("Multiplication:", a * b); 
console.log("Division:", a / b);       
console.log("Remainder:", a % b);      

//Increment and Decrement Operators: 
let counter = 1;
counter++; 
console.log("After Increment:", counter); // 2

counter--; 
console.log("After Decrement:", counter); // 1
// ---------------------------------------------------------


// Browser Functions:

// 1. alert(): Displays a simple message with an "OK" button
alert("Hello! Welcome to my MERN stack app.");

// 2. confirm(): Asks a Yes/No question and returns a boolean (true/false)
const isReady = confirm("Are you ready to learn more JavaScript tomorrow?");
if (isReady) {
    console.log("Awesome! See you tomorrow.");
} else {
    console.log("Take a break, you earned it.");
}

// 3. prompt(): Asks the user for text input and returns that text (or null if they cancel)
let favoriteLanguage = prompt("What is your favorite programming language?", "JavaScript");
console.log("My favorite language is" + favoriteLanguage + "!");
// ---------------------------------------------------------