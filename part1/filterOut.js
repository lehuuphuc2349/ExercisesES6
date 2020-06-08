const filterOut = (array, fn) =>
  array.filter((v, i) => array.every((x, j) => (i === j) === fn(v, x, i, j)));

console.log(
  filterOut(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 1, value: "d" },
      { id: 0, value: "e" },
    ],
    (a, b) => a.id == b.id
  )
);
