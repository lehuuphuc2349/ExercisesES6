const avgFuntion = (array) =>
  Math.round(array.reduce((acc, value) => acc + value) / array.length);
console.log(avgFuntion([1, 2, 3, 4, 5, 5]));
console.log(avgFuntion([1, 2, 3, 4, 5, 6, 7]));
