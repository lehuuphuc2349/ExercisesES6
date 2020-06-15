const randomNumberRange = (min, max) => {
  let result = Math.round(Math.random() * (max - min) + min);
  return result;
};
console.log(randomNumberRange(1, 10));
