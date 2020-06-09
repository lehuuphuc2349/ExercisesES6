const unionWith = (a, b, comp) =>
  Array.from(
    new Set([...a, ...b.filter((x) => a.findIndex((y) => comp(x, y)) === -1)])
  );
console.log(
  unionWith(
    [1, 2, 3, 4],
    [4, 5, 6, 7, 9],
    (a, b) => Math.round(a) === Math.round(b)
  )
);
