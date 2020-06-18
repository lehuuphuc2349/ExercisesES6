const forEeachRight = (array, callback) =>
  array.slice(0).reverse().forEach(callback);

console.log(forEeachRight([1, 2, 3, 4], (value) => console.log(value)));
