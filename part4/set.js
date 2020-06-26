const getEveryElement = (arr1, arr2) => new Set([...arr1, ...arr2]);
console.log(getEveryElement([1, 2, 3], [1, 2, 3, 4]));
