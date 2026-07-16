# Learning Log 007

Day 7 of the JavaScript fundamentals track: arrays — creation, indexing, and the fact that JS arrays don't enforce a single type.

`script.js` opens by showing the two ways to create an array (literal `[]` vs `new Array(...)`) side by side, then moves to indexing: reading by position, and mutating a single element in place (`cities[1] = "Paris"`) to make clear arrays are mutable even when declared `const` — it's the binding that's locked, not the contents. It closes on a homogeneous array (`scores`, all numbers) next to a deliberately mixed one (`mixedData`: number, string, boolean, object, nested array, `null`), then reaches into that mixed array by index and by property (`mixedData[3].name`) to show indexing composes with normal property access once an element is itself an object.

Runs via `node script.js`, consistent with logs 003–005 — no `index.html` needed.