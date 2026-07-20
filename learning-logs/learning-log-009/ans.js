// 📌 Loops


// 1. Write a for loop to print numbers from 10 to 1 in reverse.

for (let i = 10; i >= 1; i--) {
  process.stdout.write(i + " ");
}
console.log();


// 2. Use a while loop to print multiples of 3 from 3 to 30.

let n = 3;
while (n <= 30) {
  process.stdout.write(n + " ");
  n += 3;
}
console.log();


// 3. Write a program to calculate the sum of numbers from 1 to 100 using a loop.

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);


// 4. Create a nested loop to print a star pattern.

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}


// 5. Use a for...of loop to iterate over the string "JavaScript".

let str = "JavaScript";
for (let char of str) {
  console.log(char);
}


// 📌 Arrays


// 6. Remove duplicate values from an array.

let dArry = [1, 2, 3, 2, 4, 3, 5]
let dAns  = [...new Set(dArry)]
console.log(dAns);


// 7. Find the second largest number in an array.

let slArray = [10, 20, 5, 30, 30]
let ns = [...new Set(slArray)]
ns.sort((a, b) => b - a)
console.log(ns[1]);


// 8. Sort an array in descending order.

let sortArray = [5, 2, 9, 1, 5, 6]
sortArray.sort((a, b) => b- a)
console.log(sortArray);


// 9. Reverse an array without using .reverse().

let reverseArray = [1, 2, 3, 4,]

for (let i = 0; i < Math.floor(reverseArray.length / 2); i++)  {
   [reverseArray[i], reverseArray[reverseArray.length - 1 - i]] = [reverseArray[reverseArray.length - 1 - i], reverseArray[i]]
}

console.log(reverseArray);


// 10. Find the most frequent element in an array.

let mostFrequentArray = [1, 3, 3, 2, 3, 2, 2, 2, 2]
let freq = {}
mostFrequentArray.forEach(function(val){
    freq[val] === undefined ? (freq[val] = 1) : (freq[val] ++)
})
let mostFrequentNumber = Object.keys(freq).reduce(function(a, b){  
    return freq[a] > freq[b] ? a : b
})

console.log(mostFrequentNumber);


