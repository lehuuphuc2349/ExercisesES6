const keyObj = (obj, arr) =>
  Object.keys(obj).filter(
    (key) => !arr.includes(key).reduce((acc, k) => ((acc[k] = obj[k]), acc))
  );
console.log(keyObj({ a: 1, b: 2, c: 3 }, ["a"]));
