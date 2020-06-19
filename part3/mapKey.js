const mapKey = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[fn(obj[key], key, obj)] = obj[key];
    return acc;
  });
console.log(mapKey({ a: 1, b: 2 }));
