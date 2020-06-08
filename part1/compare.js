const compare = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

console.log(
  compare({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
);
