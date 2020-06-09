const tail = (array) => (array.length > 1 ? array.slice(1) : array);
console.log(tail([1, 2, 3, 4]));
console.log(tail([1]));
