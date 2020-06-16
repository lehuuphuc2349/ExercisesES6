const createArray = (width, heigth, value = null) =>
  Array.from({ length: heigth }).map(() =>
    Array.from({ length: width }).fill(value)
  );
console.log(createArray(3, 3, 0));
console.log(
  Array.from({ length: 2 }).map(() => Array.from({ length: 2 }).fill(4))
);
