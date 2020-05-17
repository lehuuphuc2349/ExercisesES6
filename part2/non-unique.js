const nonUnique = (array) =>
  array.filter((i) => array.indexOf(i) === array.lastIndexOf(i));
console.log(nonUnique([1, 2, 2, 3, 3]));
