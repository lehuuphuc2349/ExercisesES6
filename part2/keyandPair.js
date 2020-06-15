const keyAndPair = (arr) =>
  arr.reduce((acc, value) => ((acc[value[0]] = value[1]), acc), {});
console.log(
  keyAndPair([
    [1, 10],
    [2, 20],
    [3, 30],
  ])
);
