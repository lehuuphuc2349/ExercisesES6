const replaceKeyOBj = (keyMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keyMap[key] || key]: obj[key] },
    }),
    {}
  );

const obj = {
  name: "Phuc dep trai",
  age: 21,
  eyeColor: "blue",
  title: "Stark Le",
};
var resultSet = replaceKeyOBj(
  { name: "Phuc dien trai", eyeColor: "black" },
  obj
);
console.log(resultSet);
