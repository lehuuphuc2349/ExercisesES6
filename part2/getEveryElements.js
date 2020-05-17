const getNthElements = (array, nth) =>
  array.filter((e, i) => i % nth === nth - 1);
console.log(getNthElements([1, 2, 3, 4], 2));
console.log(getNthElements([1, 2, 3, 4, 5, 6], 4));
console.log(getNthElements([3, 6, 9, 12], 3));
