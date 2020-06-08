const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, value) => {
        if (acc !== undefined) return acc;
        if (typeof value === "object") return dig(value, target);
      }, undefined);
const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};
const dog = {
  status: "suceess",
  img: "dog.png",
};
const proprety = {
  name: "le Huu Phuc",
  age: 21,
  eyeColor: "Blue",
};
console.log(dig(dog, "img"));
console.log(dig(data, "level2"));
console.log(dig(proprety, "name"));
console.log(dig(proprety, "eyeColor"));
