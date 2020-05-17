// const pairTwoArray = (array1, array2) =>
//   array1.reduce((acc, x) =>
//     acc.concat(
//       array2.map((y) => [x, y]),
//       []
//     )
//   );
// console.log(pairTwoArray([1, 2], ["a", "b"]));

const pairTwoArray = (arr1, arr2) =>
  arr1.reduce((acc, x) => acc.concat(arr2.map((y) => [x, y])), []);
console.log(pairTwoArray([1, 2], ["a", "b"]));
