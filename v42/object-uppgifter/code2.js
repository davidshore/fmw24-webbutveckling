// Setup
function phoneticLookup(val) {
  let result = "";

  const loopup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = loopup[val];

  // Only change code below this line
  // switch (val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  // Only change code above this line
  return result;
}

phoneticLookup("delta");

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

console.log("flower: ", myPlants[0].type);

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

const obj = {
  name: "Sven",
};

// Setup
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

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value == "") {
    delete records[id][prop];
  } else if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  } else if (prop == "tracks") {
    if (records[id].hasOwnProperty("tracks")) {
      records[id].tracks.push(value);
    } else {
      records[id].tracks = [value];
    }
  }

  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
