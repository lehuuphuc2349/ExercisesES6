const { type } = require("os");

const trueNumber = (number) => (typeof number == "number" ? true : false);
console.log(trueNumber(10));
console.log(trueNumber("abc"));
