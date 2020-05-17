const extandColor = (shortHex) =>
  "#" +
  shortHex
    .slice(shortHex.startsWith("#") ? 1 : 0)
    .split("")
    .map((x) => x + x)
    .join("");

console.log(extandColor("#03f"));
console.log(extandColor("020"));
