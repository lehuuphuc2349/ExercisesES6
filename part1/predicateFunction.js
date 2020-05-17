const predicateFunction = (array, fn = Boolean) => array.every(fn);
console.log(predicateFunction([1, 2, 3, 4], (x) => x > 1));
console.log(predicateFunction([2, 3, 4], (x) => x > 1));

const all2 = (array, fn = Boolean) => array.every(fn);
console.log(all2([-1, -2, -3], (x) => x));
