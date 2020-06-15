const paddingNumber = (number, speci, length) => {
  let temp = number.toString();
  if (temp.length === length) {
    return temp;
  } else {
    return temp
      .padStart((temp.length + length) / 2, speci)
      .padEnd(length, speci);
  }
};
console.log(paddingNumber(23, 0, 6));
// let number = 20;
// console.log(number.toString().length);
const paddingNumber = (string) =>
  string.padStart(string.length / 2, 0).padEnd(string.length, 0);
