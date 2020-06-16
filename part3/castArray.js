const castArray = (value) => (Array.isArray(value) ? value : [value]);
console.log(castArray(10));
console.log(castArray("w3r"));
console.log(castArray([100]));
