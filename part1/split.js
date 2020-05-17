const splitTwoGroup = (array, filter) =>
  array.reduce((acc, val, i) => (acc[filter[i] ? 1 : 0].push(val), acc), [
    [],
    [],
  ]);
console.log(splitTwoGroup([1, 2, 3, 4], [true, false, true, false]));
console.log(splitTwoGroup([1, 2, 3, 4], [false, false, true, false]));
console.log(splitTwoGroup([1, 2, 3, 4], [false, false, false, false]));
console.log(splitTwoGroup([4, 2, 4, 2, 1], [true, false, true, true, false]));
