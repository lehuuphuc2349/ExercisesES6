const sliceTrum = (string, speciNumber) =>
  string.slice(0, speciNumber - 3) + "...";
console.log(sliceTrum("boomerang", 7));

const sliceDemo = (string, speciNumber) =>
  string.length > speciNumber
    ? string.slice(0, speciNumber > 3 ? speciNumber - 3 : speciNumber) + "..."
    : string;
console.log(sliceDemo("boomerang", 7));
