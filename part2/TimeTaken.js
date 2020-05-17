const timeTaken = (callback) => {
  const result = callback();
  return result;
};
console.log("Time Taken: " + timeTaken(() => Math.pow(2, 10)) + "ms");
console.log("Time Taken: " + timeTaken(() => Math.round(10.1)) + "ms");
console.log("Time Taken: " + timeTaken(() => Math.sqrt(12)) + "ms");
console.log("Time Taken: " + timeTaken(() => Math.pow(2, 10)) + "ms");
