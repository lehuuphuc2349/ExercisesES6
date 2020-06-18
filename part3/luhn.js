const { sign } = require("crypto");

const luhnNumber = (num) => {
  let arr = (num + "")
    .split("")
    .reverse()
    .map((v) => v.paresInt(v));
  let lastDigti = arr.splice(0, 1)[0];
  let sum = arr.reduce(
    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
    0
  );
  sum += lastDigti;
  return sum;
};
console.log(luhnNumber(11111111111));
