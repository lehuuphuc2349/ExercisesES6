const addAndSquare = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)));
const add = (x, y) => x + y;
const square = (x) => x * x;
const result = addAndSquare(add, square);
console.log(result(3, 2));
