const reName = (keyMaps, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keyMaps[key] || key]: obj[key] },
    }),
    {}
  );
const obj = { name: "Bobo", job: "Programmer", shoeSize: 100 };
const result = reName({ name: "Phuc dep trai", job: "Actor" }, obj);
console.log(result);
