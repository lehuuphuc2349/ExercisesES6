const keyValue = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
console.log(keyValue({ a: 1, b: "2", c: 3 }, (x) => typeof x == "number"));
