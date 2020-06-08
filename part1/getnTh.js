const getnth = (array, nth) =>
  array.filter((value, index) => index % nth === nth - 1);
console.log(getnth([1, 2, 3, 4, 5, 7], 3));
