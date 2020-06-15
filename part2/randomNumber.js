const randomNumber = (min, max) =>
  Math.round(Math.random() * (max - min) + min);
console.log(randomNumber(1, 4));
