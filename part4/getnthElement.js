const getnThElement = (arr, n) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n));
console.log(getnThElement([1, 2, 3, 4], 2));
