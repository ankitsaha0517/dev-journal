// Nested if statements
// 1. Practice: Login system check
let username = "ankit123";
let password = "pass@123";
let isAccountActive = true;

if (username === "ankit123") {
  if (password === "pass@123") {
    if (isAccountActive) {
      console.log("Login successful");
    } else {
      console.log("Account is deactivated");
    }
  } else {
    console.log("Incorrect password");
  }
} else {
  console.log("User not found");
}



// 2.Practice: Eligibility for a loan
let age = 25;
let income = 30000;

if (age >= 18) {
  if (income >= 25000) {
    console.log("Eligible for loan");
  } else {
    console.log("Income too low for loan");
  }
} else {
  console.log("Not eligible - underage");
}


//  if, else if, else
// 3.Practice: Grade calculator
let marks = 65;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 65) {
  console.log("Grade: B");
} else if (marks >= 45) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}

// while loop
// 4.Practice: Print 1 to 10
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 5.Practice: Sum of first n natural numbers
let n = 5;
let sum = 0;
let count = 1;
while (count <= n) {
  sum += count;
  count++;
}
console.log("Sum:", sum); // 15