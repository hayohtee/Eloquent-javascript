"use strict";

let arrays = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8],
];

// flatten an array of array into a single array
console.log(arrays.reduce((a, b) => a.concat(b), []));
