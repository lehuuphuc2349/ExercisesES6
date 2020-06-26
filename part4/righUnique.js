const rigthUnique = (arr, fn) =>
  arr.reduceRight((acc, val) => {
    if (!acc.some((x) => fn(val, x))) {
      acc.push(val);
    }
    return acc;
  }, []);
console.log(
  rigthUnique(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 0, value: "d" },
      { id: 1, value: "e" },
      { id: 2, value: "f" },
    ],
    (a, b) => a.id == b.id
  )
);
