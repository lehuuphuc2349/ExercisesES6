const perform = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const add5 = (x) => x + 5;
const mul5 = (x, y) => x * y;
const result = perform(add5, mul5);
console.log(result(5, 2));
