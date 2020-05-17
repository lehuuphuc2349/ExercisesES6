const removeRight = (array, n = -1) => array.slice(n);
console.log(removeRight([1, 2, 3, 4], -3));
console.log(removeRight([1, 2, 3, 4], -4));
console.log(removeRight([1, 2, 3, 4, 5], -5));
console.log(removeRight([1, 2, 3, 4, 5]));
