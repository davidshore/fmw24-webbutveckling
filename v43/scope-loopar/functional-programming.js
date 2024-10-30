let numbers = [5, 10, 22, 1, 33, 56];

// map och filter skapar nya arrayer.

let numbers2 = numbers.map((num) => {
  return num + 2;
});

console.log(numbers2);

const tabs = ["GMail", "Inbox", "Work mail", "Docs", "freeCodeCamp"];
//splice har en side effect där den uppdaterar arrayen direct
// function tabClose(index) {
//   let tabsBeforeIndex = tabs.splice(0, index); // tabsBeforeIndex = ['GMail', 'Inbox']

//   console.log("tabs", tabs);

//   let tabsAfterIndex = tabs.splice(index + 1);

//   return tabsBeforeIndex.concat(tabsAfterIndex);
// }

//const result = tabClose(2);
//console.log("result", result);

let browserTabIndexToClose = 2;

// filter är som map men den ska returnera true eller false.
// För alla värden som den returnerade true är kvar i resultat-arrayen
function tabCloseFiler(index) {
  const filteredTabs = tabs.filter((tab, i) => {
    return i != index;
    //loop 1: i = 0 index = 2 => 0 != 2 true
    //loop 2: i = 1 index = 2 => 1 != 2 => true
    //loop 3: i = 2 index = 2 => 2 != 2 => false
    //loop 4: i = 3 index = 2 => 3 != 2 => true
    //loop 5: i = 4 index = 2 => 4 != 2 => true
  });

  return filteredTabs;
}

const filteredTabs2 = tabs.filter((tab) => {
  return tab == "Work mail";
});

const res = 0 != 4; // true
const res2 = 0 == 4; // false

// const result2 = tabCloseFiler(browserTabIndexToClose);

console.log("result2", tabCloseFiler(browserTabIndexToClose));
