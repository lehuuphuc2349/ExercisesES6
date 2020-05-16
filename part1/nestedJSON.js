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
console.log(dig(dog, "img"));
