const average = (array) =>
  array.reduce(
    (a, b) =>
      function (a, b) {
        a + b;
      }
  );

console.log(average([1, 2, 3, 4]));
var array1 = [1, 2, 3, 4];
var result =
  array1.reduce(function (a, b) {
    return a + b;
  }) / array1.length;
console.log(result);
