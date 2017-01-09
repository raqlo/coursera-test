function Circle (radius) {
  console.log(this);
}

Circle();

var myCircle = new Circle(10);

console.log(myCircle);
