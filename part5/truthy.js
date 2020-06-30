const truthyCollection = (collection, pre) =>
  collection.every((obj) => obj[pre]);
console.log(
  truthyCollection([
    { user: "Phuc", sex: "male" },
    { user: "Chau", sex: "Female" },
  ])
);
