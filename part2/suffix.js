const suffix = (time) =>
  time === 0 || time === 24
    ? 12 + "am"
    : time === 12
    ? 12 + "pm"
    : time < 12
    ? (time % 12) + "am"
    : (time % 12) + "pm";

console.log(suffix(22));
