const combine = (arr) =>
  arr.reduce((acc, val) => acc.concat(acc.map((r) => [val].concat(r))), [[]]);
console.log(combine([1, 2, 3, 4]));
console.log(combine([1, 2]));
console.log(combine([1, 2, 3]));
