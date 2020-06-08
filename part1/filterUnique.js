const filterUnique = (array) =>
  array.filter((index) => array.indexOf(index) === array.lastIndexOf(index));
console.log(filterUnique([1, 2, 3, 4, 4]));
var array1 = [1, 2, 3, 4];
console.log(array1.indexOf(3) === array1.lastIndexOf(3));
