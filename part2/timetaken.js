const timeTake = (callback) => {
  const result = callback();
  return result;
};
console.log("Time taken: " + timeTake(() => Math.pow(2, 10)) + "ms");
