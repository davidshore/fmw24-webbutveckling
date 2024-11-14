function sum(a, b) {
  return a + b;
}

// Gör en funktion som vänder på en array

function reverse(arr) {
  const reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}

module.exports = { sum, reverse };
