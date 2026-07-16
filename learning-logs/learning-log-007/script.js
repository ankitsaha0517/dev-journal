// Two Ways to Create an Array
const fruits = ["Apple", "Banana", "Cherry"]; 
const colors = new Array("Red", "Green", "Blue");

console.log(fruits);
console.log(colors);


// Accessing Array Elements using Indexing
const cities = ["Tokyo", "London", "New York", "Mumbai"];

// Accessing elements
console.log(cities[0]); // Output: "Tokyo"
console.log(cities[2]);


cities[1] = "Paris";
console.log(cities);


// Homogeneous Array (All numbers)
const scores = [85, 92, 78, 100, 88];

// Heterogeneous Array (Mixed data types)
const mixedData = [
  42,                  
  "Hello World",     
  true,                
  { name: "Alice" },  
  [1, 2, 3],          
  null                 
];

console.log(mixedData[1]); 
console.log(mixedData[3].name);