const filter = (arr, val, comp) =>
  arr.filter((a) => val.findIndex((b) => comp(a, b) === -1));
