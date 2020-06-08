const boolenArray = (array, fn = Boolean) => array.every(fn);

console.log(boolenArray([1, 2, 3, 4], (x) => x >= 1));
console.log(boolenArray([-1, 2, 3, 4], (x) => x >= 1));
