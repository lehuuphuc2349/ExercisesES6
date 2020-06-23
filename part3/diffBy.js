const diffBy = (a, b, fn) => {
  const s = new Set(b.map((v) => fn(v)));
  return a.filter((x) => !s.has(fn(x)));
};
console.log(diffBy([2.1, 1.2], [2.3, 3.4], Math.floor));
