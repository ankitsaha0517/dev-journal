# Learning Log 004

Day 4 of the JavaScript fundamentals track: functions, from basic declarations through to arrow function shorthand.

`script.js` builds up in layers rather than covering functions as one topic: plain declarations with no inputs, then return values, then a DRY argument (`square` reused three times instead of copy-pasted math) to motivate why functions matter beyond syntax. From there it separates parameters from arguments, adds default parameters, then contrasts function declarations (hoisted — callable before their definition, shown by calling `subtract` before it appears) against function expressions (not hoisted the same way). It closes with anonymous functions (as a `filter` callback), then arrow functions in three widening forms: multi-parameter, zero-parameter, single-parameter (parens optional), and finally implicit-return arrows.

Like log-003, this runs via `node script.js` — no `index.html`, since only console output is needed.