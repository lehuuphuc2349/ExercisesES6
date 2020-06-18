const filterNumber = (array, value, comp) =>
  array.filter((a) => value.findIndex((b) => comp(a, b)) === -1);
console.log(
  filterNumber(
    [1, 2, 3, 3.1],
    [1, 2, 3],
    (a, b) => Math.round(a) === Math.round(b)
  )
);
