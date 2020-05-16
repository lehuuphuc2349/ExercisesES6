const filterNumber = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((value, index) => !args.includes(value));
  arr.length = 0;
  pulled.forEach((value) => arr.push(value));
  return pulled;
};
console.log(filterNumber(["a", "b", "c", "d", "e"], "a"));
console.log(filterNumber([1, 2, 3, 4, 5], 4));
console.log(filterNumber([1, 2, 3, 4, 5], 6));
console.log(filterNumber(["phuc", "trung"], "hau"));

const filterString = (string, char) => {
  let array = string.split(" ");
  let pulled = array.filter((value, index) => !char.includes(value));
  pulled.forEach((value) => array.push(value));
  return pulled;
};
console.log(filterString("phuc dep trai", "phuc"));
