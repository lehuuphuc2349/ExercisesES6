const { type } = require("os");

const avg = (array, fn) =>
  array.reduce((acc, val) => (acc + val, 0) / array.length);
console.log(avg([1, 2, 3, 4]));

const avg1 = (array) =>
  array.reduce((acc, value) => acc + value) / array.length;
console.log(avg1([1, 2, 3, 4]));
