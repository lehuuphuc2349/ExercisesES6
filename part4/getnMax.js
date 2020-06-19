const getNmax = (arr, n = 1) => arr.sort((a, b) => b - a).slice(0, n);
console.log(getNmax([1, 2, 3], 3));
