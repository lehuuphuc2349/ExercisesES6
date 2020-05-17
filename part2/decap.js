const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() +
  (upperRest ? rest.join("").toUpperCase() : rest.join(""));
console.log(decapitalize("W3resource"));
console.log(decapitalize("Red", true));

const decapitalize1 = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() +
  (upperRest ? rest.join("").toUpperCase() : rest.join(""));

console.log(decapitalize1("Phuc dep trai"));
console.log(decapitalize1("trungngu", true));
