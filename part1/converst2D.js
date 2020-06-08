const converst2D = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));
//  .map((v) => v.split(delimiter));

console.log(converst2D("a,b\nc,d"));
