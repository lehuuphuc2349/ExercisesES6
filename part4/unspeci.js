const unspeci = (data, keys, fn) =>
  data.filter(fn).map((el) =>
    keys.reduce((acc, val) => {
      acc[val] = el[val];
      return acc;
    }, {})
  );
const data = [
  {
    id: 1,
    name: "PHUC DEP TRAI",
    age: 21,
  },
  {
    id: 2,
    name: "Trung ngu",
    age: 20,
  },
];
console.log(unspeci(data, ["id", "name"], (item) => item.age > 20));

const numberPlay = (number) => {
  if (number % 2 === 0 && number !== null) {
    return "Ashishgup";
  } else {
    return "FastestFinger";
  }
};
