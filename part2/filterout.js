const filterOut = (array, ...specElement) =>
  array.filter((value) => !specElement.includes(value));

console.log(filterOut([1, 2, 3, 4], 1, 2));
