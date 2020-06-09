const safeInterger = (num) =>
  Math.round(
    Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );
console.log(safeInterger(5.2));
console.log(safeInterger(5.6));
console.log(safeInterger(Infinity));
