const findMinAndCompare = (array, comparator = (a, b) => a - b) =>
  array.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));

console.log(findMinAndCompare([1, 4, 5, 2, -1]));
console.log(
  findMinAndCompare(
    [
      { name: "Phuc", age: 21 },
      { name: "Trung", age: 14 },
    ],
    (a, b) => a.age - b.age
  )
);
