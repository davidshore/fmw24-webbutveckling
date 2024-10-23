// Setup
const person = {
  firstName: "David",
  lastName: "Shore",
};

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

const track2 = recordCollection[2548].tracks[1];
console.log("track2", track2);

// Your function must always return the entire records object.
// If value is an empty string, delete the given prop property from the album.

// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.

// If prop is tracks and value isn't an empty string, but the album doesn't have a tracks
// property, create an empty array and add value to it.

// If prop is tracks and value isn't an empty string, add value to the
// end of the album's existing tracks array.
function updateRecords(records, id, prop, value) {
  if (value == "") {
    delete records[id][prop];
  }

  if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  }

  if (
    prop == "tracks" &&
    value != "" &&
    !records[id].hasOwnProperty("tracks")
  ) {
    records[id].tracks = [value];
  }

  // Istället för hasOwnProperty
  // records[id].tracks == null
  if (prop == "tracks" && value != "" && records[id].hasOwnProperty("tracks")) {
    records[id].tracks.push(value);
  }

  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");

// Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (value == "") {
//     delete records[id][prop];
//   } else if (prop != "tracks" && value != "") {
//     records[id][prop] = value;
//   } else if (prop == "tracks") {
//     if (records[id].hasOwnProperty("tracks")) {
//       records[id].tracks.push(value);
//     } else {
//       records[id].tracks = [value];
//     }
//   }

//   return records;
// }

// updateRecords(recordCollection, 5439, "artist", "ABBA");

function gross(net) {
  let vat = 20;
  let tax = (net * vat) / 100;
  return net + tax;
}

function addWithVat(netX, netY) {
  let grossX = gross(netX);
  let grossY = gross(netY);
  return grossX + grossY;
}

// Write a function sum that takes an array of numbers and
// returns the sum of these numbers. Write a function mean
// that takes an array of numbers and returns the average of these numbers.
// The mean function should use the sum function.

const numbers = [1, 2, 455, 6, 4];

// medelVärdet = summan av talen / längd av tal

function sum(arr) {
  let sum = 0;
  arr.forEach((num) => {
    return (sum += num);
  });
  return sum;
}

function mean(arr) {
  const theSum = sum(arr);

  const theLength = arr.length;

  return theSum / theLength;
}

const result = mean(numbers);
console.log("result", result);
