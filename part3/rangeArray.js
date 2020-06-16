const rangeArray = (start = 0, end, step = 1) =>
  Array.from({ length: Math.ceil(end - start + 1) / step }).map(
    (value, index) => index * step + start
  );
console.log(rangeArray(0, 10, 2));
