# 📜 JavaScript Advanced HOFs, Callbacks, and Closures

## JavaScript Challenges on HOFs, Callbacks, and Closures

### Question 1: Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

**Expected Input:**
```
callback: () => console.log("Executed after 3 seconds")
delay: 3000ms
```

**Expected Output:**
```
Executed after 3 seconds   // (logged after a 3-second delay)
```

---

### Question 2: Implement your own version of `.map()` as a higher-order function.

**Expected Input:**
```
[1, 2, 3]
```

**Expected Output:**
```
[2, 4, 6]
```

---

### Question 3: Write a function that uses closures to create a counter.

**Expected Input:**
```
3 calls to counter()
```

**Expected Output:**
```
1
2
3
```

---

### Question 4: Implement a function that limits how many times another function can be called (Closure + HOF).

**Expected Input:**
```
limit: 3
calls: 4
```

**Expected Output:**
```
hello
hello
hello
// (4th call produces no output — limit reached)
```

---

### Question 5: Create a function that takes a callback and executes it after every `n` seconds indefinitely.

**Expected Input:**
```
callback: () => console.log("Repeating...")
interval: 2 seconds
```

**Expected Output:**
```
Repeating...
Repeating...
Repeating...
// (logged every 2 seconds, indefinitely)
```

---

### Question 6: Implement a function that returns a function with a preset greeting (Closure).

**Expected Input:**
```
greetHello = greetUser("Hello")
greetHello("Alice")
greetHello("Bob")
```

**Expected Output:**
```
Hello, Alice!
Hello, Bob!
```

---

### Question 7: Implement a function that takes a callback and only executes it once (HOF + Closure).

**Expected Input:**
```
init = once(() => console.log("Initialized!"))
2 calls to init()
```

**Expected Output:**
```
Initialized!
// (2nd call produces no output)
```

---

### Question 8: Implement a function that throttles another function (HOF + Closures).

**Expected Input:**
```
delay: 2000ms
3 calls to throttledFn(), made back-to-back
```

**Expected Output:**
```
Throttled Execution
// (only the first call executes; the other 2 are ignored since they occur within the 2s delay)
```

---