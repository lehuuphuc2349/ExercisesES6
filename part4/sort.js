const sort = (array) => {
  const mid = Math.floor(array.length / 2);
  const result = array.sort((a, b) => a - b);
  return array.length % 2 !== 0
    ? result[mid]
    : (result[mid - 1] + result[mid]) / 2;
};

console.log(sort([14, 5, 21, 1, 6]));
