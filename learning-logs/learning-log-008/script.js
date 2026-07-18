// An object is a collection of key-value pairs used to store related data
let student = {
  name: "Ankit",
  age: 22,
  course: "MCA"
};
console.log(student);
console.log(typeof student); 




// Method 2: Using "new Object()"
let person2 = new Object();
person2.name = "Rahul";
person2.city = "Delhi";


console.log(person2);



let config = {
  appName: "DevJournal",
  version: "1.0"
};

Object.freeze(config);

config.version = "2.0";    //  --> fails silently (no error in non-strict mode)

console.log(config);    


// null is object type
let value = null;
console.log(typeof value);


//console.table()
let students = [
  { name: "Ankit", age: 22, course: "MCA" },
  { name: "Rahul", age: 23, course: "MBA" },
  { name: "Priya", age: 21, course: "BCA" }
];
console.table(students);

// You can select specific columns to show
console.table(students, ["name", "course"]);




// console.info() is similar to console.log() - used for informational messages
console.info("Application started successfully");
console.info("User logged in:", { name: "Ankit", role: "admin" });



// Groups related console logs together with indentation (great for debugging)
console.group("User Details");
console.log("Name: Ankit");
console.log("Age: 22");
console.log("Course: MCA");
console.groupEnd();



// Nested groups
console.group("Order Summary");
console.log("Order ID: 1234");

console.group("Items");
console.log("Item 1: Laptop - ₹55000");
console.log("Item 2: Mouse - ₹500");
console.groupEnd(); 

console.log("Total: ₹55500");
console.groupEnd(); 