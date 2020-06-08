const removeIndex = (array, indexRemove) => {
  let remove = [];
  let pulled = array.map((value, tindex) =>
    indexRemove.includes(index) === indexRemove ? remove.push(value) : value
  );
  return remove;
};
console.log(removeIndex([1, 2, 3, 4], [1, 2]));

const pullArray = (array, remove) => {
  let removed = [];
  let pull = array
    .map((value, index) =>
      remove.includes(index) ? removed.push(value) : value
    )
    .filter((value, index) => !value.includes(remove));
  return removed;
};
console.log(pullArray([1, 2, 3, 4], [1, 2]));
