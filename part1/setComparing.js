const setComparing = (array, compare = (a, b) => a - b) =>
  array.reduce((a, b) => (compare(a, b) >= 0 ? b : a));
console.log(setComparing([1, 2, 3, 5, 6, 6]));
console.log(setComparing([1, 2, 3, 4], (a, b) => b - a));
console.log(setComparing([1, 2, 3, 4], (a, b) => a - b));
console.log(
  setComparing(
    [
      { name: "Kevin", age: 16 },
      { name: "John", age: 20 },
      { name: "Ani", age: 19 },
    ],
    (a, b) => a.age - b.age
  )
);
