const conver = (string) => string.split(" ");

console.log(conver("phuc dep trai"));

const array = [1, 2, 3, 4, 5].reduce((acc, val, key) => (acc + val, acc));
console.log(array);
