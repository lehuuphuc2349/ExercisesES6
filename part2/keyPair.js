const keyParir = (obj) => Object.keys(obj).map((k) => [k, obj[k]]);
console.log(keyParir({ a: 2, b: 2, c: 3 }));
