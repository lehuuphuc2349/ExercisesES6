const randomColor = () => {
  let random = (Math.random() * 0xfffff * 100000).toString(16);
  return "#" + random.slice(0, 6);
};
console.log(randomColor());
