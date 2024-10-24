// Destructure
const myObj = {
  title: "t-shirt",
  size: "M",
  prices: { small: 100, medium: 150 },
};

const { title, size } = myObj;

// Nestlade object
const {
  prices: { small },
} = myObj;

console.log("small", small);

// Destructure med arrayer

const myArr = [0, 2, 3];

const [num1, num2, num3] = myArr;
console.log("numbers", num1, num2, num3);
