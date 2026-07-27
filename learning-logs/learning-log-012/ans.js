// 1. Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

function callerFn(fun) {
  setTimeout(fun, 3000);
}
callerFn(function () {
  console.log(`Hi`);
});


// 2.  Implemented your own version of the ".map()" as a higher-order function.
var arr = [1, 2, 3];

function myMap(arr, fun) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fun(arr[i]));
  }
  return newArr;
}

let ans = myMap(arr, function (val) {
  return val * 2;
});

console.log(ans);


// 3. Write a function that uses closures to create a counter.

function counter() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  };
}

let count = counter();

count();
count();
count();


// 4: Implement a function that limits how many times another function can be called (Closure + HOF).

function limiter(fun, limit) {
  let count = 0;
  return function () {
    if (count < limit) {
      count++;
      fun();
    } else {
      console.log(`limit reached`);
    }
  };
}

let greed = limiter(function () {
  console.log(`HELLO`);
}, 3);

greed();
greed();
greed();
greed();


// 5. Create a function that takes a callback and executes it after every n seconds indefinitely.

function repeatingFun(fun, sec) {
  setInterval(fun, sec * 1000);
}

repeatingFun(function () {
  console.log(`Repeating...`);
}, 2);


// 6: Implement a function that returns a function with a preset greeting (Closure).
function greetUser(message) {
  return function (name) {
    console.log(`${message}, ${name}!`);
  };
}

let greetHello = greetUser("Hello");
greetHello("Alice");
greetHello("Bob");

let greetHi = greetUser("Hi");
greetHi("Alice");
greetHi("Bob");

   
// 7: Implement a function that takes a callback and only executes it once (HOF + Closure).

function once(fun) {
  let isCalled = true;
  return function () {
    if (isCalled == true) {
      fun();
      isCalled = false;
    } else {
      console.log(`already called`);
    }
  };
}

let ansOnce = once(function () {
  console.log(`Hi`);
});

ansOnce();
ansOnce();


// 8.  Implement a function that throttles another function (HOF + Closures).

function throttles(fun,dely){
    let lastCall = 0;
    return function(){
        let current = Date.now()
        if(current - lastCall >= dely){
            lastCall = current
            fun()
        }
    }
}

let newFunc = throttles(function(){
    console.log(`Will run in 2 sec`);
},2000)

newFunc()
newFunc()
newFunc()