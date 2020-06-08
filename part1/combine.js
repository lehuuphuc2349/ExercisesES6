const combine = (array) =>
  array.reduce((acc, value) => acc.concat(acc.map((r) => [value].concat(r))), [
    [],
  ]);
// console.log(combine([1, 42, 1, 32, 1]));
console.log(combine([1, 2, 3, 4]));
console.log(combine([1, 2]));
