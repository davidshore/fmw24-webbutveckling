// for, while, do while, for of, for in

// loopar med arrow function: forEach, map, filter, find

// Logga 1 till 5.

for (let i = 100; i < 500; i++) {
  console.log(i + 1);
}

for (let i = 1; i < 6; i++) {
  console.log(i);
}

const arr = [1, 2, 3, 4, 5];
arr.forEach((num) => {
  console.log(num);
});

let i = 1;
while (i < 6) {
  console.log(i);
  i++;
}

// 33 / 2 = 16.5
// 32 / 2 = 16
// Jämnt delbart: 33 / 2 => 16 + 1 rest

// Skriv en for loop som summerar alla jämna tal
let sum = 0;
let numbers = [5, 10, 22, 1, 33, 56];

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];

  if (num % 2 == 0) {
    sum += num;
    //sum = sum + numbers[i];
  }
}
console.log("sum", sum);

let sum2 = 0;
// Samma uppgift med for of
for (let num of numbers) {
  if (num % 2 == 0) {
    sum2 += num;
  }
}
console.log("sum2 ", sum2);

// Samma uppgift med forEach
let sum3 = 0;
numbers.forEach((num) => {
  if (num % 2 == 0) {
    sum3 += num;
  }
});

console.log("sum3 ", sum3);

// Samma uppgift med forEach udda tal
let sumUddaTal = 0;
numbers.forEach((num) => {
  if (num % 2 == 1) {
    sumUddaTal += num;
  }
});
console.log("sumUddaTal", sumUddaTal);

// Filtrera alla jämna tal
// Filter är ungefär som map (använder arrow function)
// true eller false måste returneras
// Alla element där true returnerades blir kvar i den nya arrayen

let sum5 = 0;
const evenNumbers = numbers.filter((num) => {
  return num % 2 == 0;
});

evenNumbers.forEach((num) => {
  sum5 += num;
});

//chaining
let sum6 = 0;
numbers
  .filter((num) => {
    return num % 2 == 0;
  })
  .forEach((num) => {
    sum6 += num;
  });

const oddNumbers = numbers.filter((num) => {
  return num % 2 == 1;
});

// filter kan ta bort element map kan förvandla element
const times2 = numbers.map((num) => {
  return num * 2;
});

console.log("evenNumbers", evenNumbers);
console.log("oddNumbers", oddNumbers);
console.log("times2", times2);
