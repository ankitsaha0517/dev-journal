// 1  -Hoisting

//var is hoisted with value "undefined"
console.log(a); // undefined (not an error)
var a = 10;
console.log(a);

// Function declarations are fully hoisted 
sayHi();
function sayHi() {
  console.log("Hi there!");
}


//2  -Immediately Invoked Function Expression (IIFE)

(function() {
  console.log("IIFE executed!");
})();

//3 -Higher-Order Functions (HOF)

function processArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {   
    result.push(callback(arr[i]));
  }
  return result;
}

let nums = [1, 2, 3, 4];
let doubled = processArray(nums, function(n) {
  return n * 2;
});
console.log(doubled);


//4  -Callback Functions
function greetUser(name, callback) {
  console.log(`Hi ${name}`);
  callback();
}
greetUser("Ankit", function() {
  console.log("Callback executed after greeting");
});