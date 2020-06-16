const bifu = (array, fn) =>
  array.reduce(
    (acc, value, index) => (acc[fn(value, index) ? 0 : 1].push(value), acc),
    [[], []]
  );
console.log(bifu(["phuc", "phuc", "phuc", "chau"], (x) => x[0] === "p"));
