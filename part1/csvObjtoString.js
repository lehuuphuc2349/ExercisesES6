const csv_to_array = (arr, columns, delimiter = ",") =>
  [
    columns.join(delimiter),
    ...arr.map((obj) =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}"`,
        ""
      )
    ),
  ].join("\n");
console.log(
  csv_to_array(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"]
  )
);
