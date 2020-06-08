const bifucarte = (array, filter) =>
  array.reduce(
    (acc, value, index) => (acc[filter[index] ? 0 : 1].push(value), acc),
    [[], []]
  );

console.log(bifucarte([1, 2, 3, 4], [true, false, true, false]));
