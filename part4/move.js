const { off } = require("process");

const move = (array, speciMoveElement) =>
  array.slice(speciMoveElement) + "," + array.slice(0, speciMoveElement);
console.log(move([12, 3, 3, 4], 2));

const move1 = (array, offset) => [
  ...array.slice(offset),
  ...array.slice(0, offset),
];
console.log(move1([1, 23, 4, 4], 2));
console.log(move1([1, 23, 4, 4, 4, 5, 10], 3));
