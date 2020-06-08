const sizeString = (string) => {
  let result = string;
  result = Blob.size();
  return result;
};
console.log(sizeString("12355"));
