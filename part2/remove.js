const { type } = require("os");

const getNumber = (array) => array.filter((value) => typeof value == "number");
console.log(getNumber(["", true, 1, 2, 3, 4]));
