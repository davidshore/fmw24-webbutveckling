let numbers = [5, 10, 22, 1, 33, 56];

// map och filter skapar nya arrayer.

let numbers2 = numbers.map((num) => {
  return num + 2;
});

const tabs = ["GMail", "Inbox", "Work mail", "Docs", "freeCodeCamp"];
//splice har en side effect där den uppdaterar arrayen direct
function tabClose(index) {
  let tabsBeforeIndex = tabs.splice(0, index); // tabsBeforeIndex = ['GMail', 'Inbox']

  console.log("tabs", tabs);

  let tabsAfterIndex = tabs.splice(index + 1);

  return tabsBeforeIndex.concat(tabsAfterIndex);
}

//const result = tabClose(2);
//console.log("result", result);

let browserTabIndexToClose = 4;

function tabCloseFiler(index) {
  const filteredTabs = tabs.filter((tab, i) => {
    return i != index;
  });

  return filteredTabs;
}

// const result2 = tabCloseFiler(browserTabIndexToClose);

console.log("result2", tabCloseFiler(browserTabIndexToClose));
