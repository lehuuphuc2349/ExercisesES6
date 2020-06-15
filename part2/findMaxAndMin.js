const findMaxAndMin = (array) => {
  let max = Math.max(...array);
  let min = Math.min(...array);
  let result = `Max array is a:${max},Min array is a ${min}`;
  return result;
};
console.log(findMaxAndMin([1, 2, 3, 4, 5]));
