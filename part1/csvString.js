const csvString = (array, columns, delimeter = ",") =>
  [
    columns.join(delimeter),
    ...array.map(
      (obj) =>
        columns.reduce(
          (acc, key) =>
            `${acc}${!acc.length ? "" : delimeter}"${
              !obj[key] ? "" : obj[key]
            }"`
        ),
      ""
    ),
  ].join("\n");

console.log(
  csvString(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"]
  )
);
