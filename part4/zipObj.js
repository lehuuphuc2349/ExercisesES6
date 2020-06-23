const zipObj = (props, value) =>
  props.reduce((obj, prop, index) => ((obj[prop] = value[index]), obj), {});
console.log(zipObj(["a", "b", "c"], [1, 2]));
