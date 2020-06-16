const findnull = (...args) => args.find((_) => ![undefined, null].includes(_));
console.log(findnull(null, undefined, "", NaN, "abcd"));
