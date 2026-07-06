//Switch Case

// Practice 1: Day name from number
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}


// Practice 2: Simple calculator using switch
let num1 = 10, num2 = 5, operator = "*";
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    result = "Invalid operator";
}
console.log("Result:", result);


// For loop


// Practice 3: Print 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Practice 4: Sum of first n numbers
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log("Sum:", sum);

// Practice 5: Multiplication table
let table = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${table} x ${i} = ${table * i}`);
}



//Dynamic for loop

// Practice 6: Loop through an array
let fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}



//Break & continue

// Practice 7: break - stop loop when condition met
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break;
  }
//   console.log(i); 
}

// Practice 8: continue - skip current iteration
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i); //give  odds number
}
