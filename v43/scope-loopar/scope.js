// let x = 1; // Global variabel

// let y = 5;

// function myFunction() {
//   let y = 2; // Local variabel

//   console.log("i funktionen", x);
//   console.log("y i funktionen", y);
// }

// myFunction();
// console.log("utanför funktionen", x);

// console.log("y utanför funktionen", y);

// Block scope
let z = 5;

function updateZ() {
  z = 10;
  let y = 20;

  var x = 30;

  if (true) {
    let y = 30;
    var x = 40;
    console.log("inside block", y);
    console.log("var inside block", x);
  }

  console.log("var inside function", x);
  console.log("inside function", y);
}
updateZ();

console.log("outside function", z);
