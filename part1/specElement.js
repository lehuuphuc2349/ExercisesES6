const specElement = (array, remove) => {
  let removed = [];
  let pulled = array
    .map((value, index) =>
      remove.includes(index) ? removed.push(value) : value
    )
    .filter((value, index) => !removed[index]);
};
const sliceArray = (array, n = 1) => array.slice(n);
console.log(sliceArray([1, 2, 3], 1));
