const pick = (obj, arr) =>
  arr.reduce((acc, cur) => cur in obj && ((acc[cur] = obj[cur]), acc), {});
console.log(pick({ a: 1, b: "2", c: 3 }, ["a", "c"]));
