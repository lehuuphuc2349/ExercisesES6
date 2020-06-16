const checkAllElementEqual = (array) =>
  array.every((value) => value === array[0]);
console.log(checkAllElementEqual([1, 2, 3, 4, 5]));
console.log(checkAllElementEqual([1, 1, 1, 1, 1, 1]));
