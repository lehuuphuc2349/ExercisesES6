const unzip = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map((x) => x.length)),
      }).map((x) => [])
    )
    .map((val) => fn(...val));
console.log(
  unzip(
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    (...args) => args.reduce((acc, val) => acc + val),
    0
  )
);
