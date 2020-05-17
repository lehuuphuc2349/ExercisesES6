const YesNo = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
console.log(YesNo("Y"));
console.log(YesNo("yes"));
console.log(YesNo("N"));
console.log(YesNo("n"));
console.log(YesNo("no"));

console.table([1, 2], [3, 4]);
