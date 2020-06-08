const concatArray = (array1, array2) =>
  array1.reduce((acc, x) => acc.concat(array2.map((y) => [x, y])), []);
console.log(concatArray(["a", "b"], [1, 2]));
