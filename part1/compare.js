//Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
const matches = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
console.log(
  matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
); // true
console.log(
  matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
); // false
console.log(
  matches({ hair: "long", beard: true }, { age: 26, hair: "long", beard: true })
); // false

// const button = document.querySelector("button");
// const colors = ["red","green","blue","yellow"];
// const nameColor = document.querySelector('span');
// document.body.style.backgroundColor = "purple";
// button.addEventListener('click',function() {
//    const ramdom = Math.floor(Math.ramdom() * colors.length);
//    document.body.style.backgroundColor = colors[random];
//    nameColor.textContent = colors[random];
// })
// const promise = new Promise((resolve, reject) =>{
//    if(resolve) {
//       alert("Phuc dep trai");
//    } else {
//       alert("Phuc xau trai");
//    }
// })
