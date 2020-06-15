const splitGroup = (array, bool) =>
  array.reduce((acc, value, i) => (acc[bool[i] ? 0 : 1].push(value), acc), [
    [],
    [],
  ]);
console.log(splitGroup([1, 2, 3, 4], [true, false, true, false]));
