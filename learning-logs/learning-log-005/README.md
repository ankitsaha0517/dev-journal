# Learning Log 005

Day 5 of the JavaScript fundamentals track: hoisting, IIFEs, and functions as first-class values.

`script.js` starts with hoisting split into its two real behaviors: `var` is hoisted as `undefined` (so reading it before assignment doesn't error, it just logs `undefined`), while function declarations are hoisted whole, so `sayHi()` runs before its own definition appears in the file. It then covers the IIFE pattern — a function defined and called in the same expression, used for one-off execution without polluting the outer scope. The last two sections are really one idea in two forms: higher-order functions (`processArray` takes a callback and applies it per element, like a hand-rolled `map`) and plain callback functions (`greetUser` runs a callback after its own logic), establishing that functions can be passed around and invoked by other functions rather than only called directly.

Runs via `node script.js`, consistent with logs 003–004 — no `index.html` needed.