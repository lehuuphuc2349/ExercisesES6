const getKey = (obj, fn) =>
  Object.keys(obj).forEach((key) => fn(obj[key], key, obj));

getKey(
  {
    foo: "bar",
    num: 1,
  },
  (value) => console.log(value)
);
