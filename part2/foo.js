const chekFoo = (obj, inher = false) =>
  inher
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj).filter((key) => typeof obj[key] == "function");
function Foo() {
  this.a = () => 1;
  this.b = () => 2;
}
Foo.prototype.c = 3;
console.log(chekFoo(new Foo(), true));
console.log(chekFoo(new Foo()));
