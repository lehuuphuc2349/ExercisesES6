const mapMax = (array, fn) =>
  Math.max(...array.map(typeof fn === "function" ? fn : (val) => fn[val]));
console.log(mapMax([{ a: 1 }, { a: 2 }, { a: 3 }], (o) => o.a));
