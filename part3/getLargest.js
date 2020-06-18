const getLargest = (...vals) =>
  [...vals].sort((a, b) => b.length - a.length)[0];
console.log(
  getLargest(["1", "11", "111", "1111"], ["1", "11", "111", "1111", "111111"])
);
