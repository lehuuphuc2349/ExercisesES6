const converseNumber = (number) =>
  [...`${number}`].map((index) => parseInt(index));
console.log(converseNumber(123));
console.log(converseNumber(1245));
