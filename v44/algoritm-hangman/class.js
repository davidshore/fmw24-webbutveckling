//Rektangel objekt - vanligt sätt - funktionell programmering
const rectangle = {
  width: "100",
  height: "150",
};

function getArea(rect) {
  return rect.width * rect.height;
}

const area = getArea(rectangle);

//Rektangel objekt - objekt-orienterad programmering
// Kan ses som en funktion som skapar object.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    // this.length = 10;
  }

  //Methods = Funktioner i en klass
  getArea() {
    this.width * this.height;
  }
}

const rectangle2 = new Rectangle(20, 30);
const area2 = rectangle2.getArea();
// const len = rectangle2.length

//Object-orienterat
const rectangles = [
  new Rectangle(20, 30),
  new Rectangle(200, 40),
  new Rectangle(200, 40),
];

rectangles.forEach((rect) => {
  console.log(rect.getArea());
});

const rectangles2 = [
  {
    width: "100",
    height: "150",
  },
  {
    width: "10",
    height: "15",
  },
  {
    width: "100",
    height: "150",
  },
];

rectangles.forEach((rect) => {
  console.log(getArea(rect));
});

// Exempel på klasser i javascript: Date
const date = new Date();
const time1 = date.getTime();

console.log("time 1", time1);
setTimeout(() => {
  const date2 = new Date();
  const time2 = date2.getTime();
  console.log("time 2", time2);

  console.log("Det har gått antal milli sekunder: ", time2 - time1);
}, 5000);
