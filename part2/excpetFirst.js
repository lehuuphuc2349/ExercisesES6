const excpetElement = (array) => {
  if (array.length === 1) {
    return array;
  } else {
    return array.slice(1);
  }
};
console.log(excpetElement([12, 3, 3, 3]));
console.log(excpetElement([1]));
