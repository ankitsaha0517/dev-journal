// Basic function structure: name, parameters, body, return
// 1.
function greet() {
  console.log("Hello, welcome!");
}
greet(); 

// 2.
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

// GOOD (DRY - reuse a function instead)
// 3.
function square(num) {
  return num * num;
}
console.log(square(5));
console.log(square(8));
console.log(square(12));

//Parameters & Arguments
// 4.
function multiply(x, y) {
  // x, y = parameters
  return x * y;
}
let m = multiply(4, 5); // 4, 5 = arguments
console.log(m);

// 5.
function greetPerson(name = "Guest") {
  //Default parameters
  console.log(`Hello, ${name}`);
}
greetPerson();
greetPerson("Ankit");

// Function declaration - hoisted, can be called before it's defined
// 6.
console.log(subtract(10, 4));
function subtract(a, b) {
  return a - b;
}

// Function expression - stored in a variable, NOT hoisted the same way
// This will throw an error if called before definition
// 7.
const divide = function (a, b) {
  return a / b;
};
console.log(divide(10, 2));

// Anonymous function
// 8.
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

// Arrow function - shorter syntax for function expressions
// 9.
const greetArrow = (name, age) => {
  console.log(`Hi ${name}, you are ${age} years old.`);
};
greetArrow("Ankit", 22);

// Arrow function with no parameters
// 10.
const sayHello = () => {
  console.log("Hello there!");
};
sayHello();

//  Arrow Functions with One Parameter - parentheses are optional
// 11.
const isEven = num => {
  return num % 2 === 0;
};
console.log(isEven(10)); 
console.log(isEven(7));  


// Arrow Functions with Implicit Return
// 12.
const division = (a, b) => a + b;
console.log(division(10, 20)); 

const isAdult = age => age >= 18;
console.log(isAdult(20));