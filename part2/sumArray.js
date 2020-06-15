const sumArray = (array) => {
  if (array.length === 0) {
    return array;
  } else {
    var result = array.reduce(function (a, b) {
      return a + b;
    });
  }
  return result;
};
console.log(sumArray([1, 23, 3, 4]));
