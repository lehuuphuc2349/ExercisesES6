const rigthUnique = (arr, fn) =>
  arr.reduceRight((acc, val) => {
    if (!acc.some((x) => fn(val, x))) {
      acc.push(val);
    }
    return acc;
  }, []);
console.log(
  rigthUnique(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 0, value: "d" },
      { id: 1, value: "e" },
      { id: 2, value: "f" },
    ],
    (a, b) => a.id == b.id
  )
);
const value = (arr) => {
  let result = [];
  let max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(value([1, 2, 3, 4]));
const findMaxValue = (arr) => {
  let max = Math.max(...arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == max) {
      return arr[i];
    }
  }
};
console.log(findMaxValue([10, 12, 3, 311]));
const unique2Array = (arr1, arr2) => {
  let result = [];
  if (arr1.length !== 0 && arr2.length !== 0) {
    result = new Set([...arr1, ...arr2]);
  }
  return result;
};
console.log(unique2Array([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
