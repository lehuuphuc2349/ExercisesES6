const when = (pred, whentrue) => (x) => (pred(x) ? whentrue(x) : x);
const doubleAss = when(
  (x) => x % 2 == 0,
  (x) => x * 2
);
console.log(doubleAss(2));
console.log(doubleAss(1));
