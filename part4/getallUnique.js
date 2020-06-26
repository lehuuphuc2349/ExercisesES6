const getAllUnique = (arr, fn) =>
  arr.reduce((acc, val) => {
    if (!acc.some((x) => fn(val, x))) {
      acc.push(val);
    }
    return acc;
  }, []);
console.log(
  getAllUnique(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
    ],
    (a, b) => a.id == b.id
  )
);
