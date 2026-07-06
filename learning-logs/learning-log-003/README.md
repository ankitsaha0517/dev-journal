# Learning Log 003
 
Day 3 of the JavaScript fundamentals track: `switch` as an alternative to long `else if` chains, then `for` loops for counted repetition.
 
`script.js` is run directly with Node.js rather than loaded in a browser — there's no `index.html` here on purpose, since these snippets need only `console.log` output, not the DOM or browser dialogs from earlier logs. It moves from `switch` (day-name lookup, then a calculator dispatching on an operator string) to `for` loops used three ways: fixed-count printing, accumulation (sum), and building formatted output (a multiplication table). It then covers looping over an array by index, and closes with `break` vs `continue` as the two ways to alter a loop's normal path.
 
Later logs continue the pattern: each numbered log is one topic cluster, practiced as small runnable snippets in place rather than described separately. Logs that only need console output (no browser APIs) can drop `index.html` and run via `node script.js`.