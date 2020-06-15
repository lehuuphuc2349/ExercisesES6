const order = (array, props, order) =>
  [...array].sort((a, b) =>
    props.reduce((acc, props, i) => {
      if (acc === 0) {
        const [p1, p2] =
          order && order[i] === "desc"
            ? [b[props], a[props]]
            : [a[props], b[props]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    })
  );
const users = [
  { name: "Phuc dep trai", age: 21 },
  { name: "Trung ngu", age: 21 },
];
console.log(users, ["name", "age"]);
