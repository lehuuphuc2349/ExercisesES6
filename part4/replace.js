const replace = (number, spec = 4) =>
  number.toString().slice(0, spec).replace(/./g, "*") +
  number.toString().slice(spec);
console.log(replace(1234567890));
