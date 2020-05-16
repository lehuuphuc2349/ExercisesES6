const converse_to_array = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((value) => value.split(delimiter));
console.log(converse_to_array("a,b\nc,d"));
