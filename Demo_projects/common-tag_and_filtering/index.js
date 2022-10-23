let tagSelect = GETDOMQUERY("#tag_filter");
let activeTagsView = GETDOMQUERY(".tags_select");
let sortTypesContainer = GETDOMQUERY("#sort-type");
let sortOrderContainer = GETDOMQUERY("#sort-order");
let search = GETDOMQUERY("#search");

let itemContainer = GETDOMQUERY(".items");

let time = new Date();
time = time.getTime();
console.log(time);

let tagProp = function (tagName) {
  return `
<tag>${tagName}</tag>
`;
};

let tagSelectProp = function (tagName) {
  return `<option value="${tagName}">${tagName}</option>`;
};

let activeTagsProp = function (tagName) {
  return `<tag class="align"
  >${tagName}<img class="close" src="./x.svg" alt=""
/></tag>`;
};

let itemProp = function (tags, name, desc, date) {
  return `<div class="item">
    <div class="tags">
    ${tags}
    </div>

    <div class="item-desc">
    <div class="item_name">${name}</div>
    <div class="date-item">${date}</div>
    </div>

    <div class="desc_cont">
      <div class="style_part"><div class="item_name">${name}</div></div>
      <div class="text_desc">
      ${desc}
      </div>
    </div>
  </div>`;
};

let itemNames = [];
let items = [
  {
    tags: ["RTS", "Strategy", "Action"],
    name: "Abba",
    desc: "lorem",
    date: 1666511643356,
  },
  {
    tags: ["RTS", "Strategy", "Action"],
    name: "Mana",
    desc: "lorem",
    date: 1666511613356,
  },
  {
    tags: ["RTS", "Strategy", "Action"],
    name: "Aloft",
    desc: "lorem",
    date: 1666511632356,
  },
  {
    tags: ["RTS", "Strategy", "Action"],
    name: "Cina",
    desc: "lorem",
    date: 1666511653356,
  },
  {
    tags: ["RTS", "Strategy", "Action"],
    name: "Kraing",
    desc: "lorem",
    date: 1666511633556,
  },
  {
    tags: ["RTS", "Strategy", "Action"],
    name: "Lover",
    desc: "lorem",
    date: 1666511633956,
  },
  {
    tags: ["RTS", "Strategy", "Action"],
    name: "Mina",
    desc: "lorem",
    date: 1666511638356,
  },
  {
    tags: ["RTS", "Strategy", "Action"],
    name: "Aers",
    desc: "lorem",
    date: 1666511673356,
  },
  {
    tags: ["RTS", "Strategy", "Action"],
    name: "Greek",
    desc: "lorem",
    date: 1666511636356,
  },
];
let tags = [
  "Strategy",
  "Action",
  "Adventure",
  "RTS",
  "Ecci",
  "Simulation",
  "RPG",
  "FPS",
  "Children",
];
let sortTypes = ["By Name", "By Date", "By Popularity", "By Clicks"];
let sortOrders = ["Descending", "Ascending"];

let sortParams = {
  sortType: "By Name",
  sortOrder: "Descending",
};

// let tagString = "StrategyActionAdventureRTSEcciSimulationRPGFPSChildren";
let asciiFormCollection = [];
let activeTags = [];
let searchKey = "";

selectPopulator(tagSelect, tags);
selectPopulator(sortTypesContainer, sortTypes);
selectPopulator(sortOrderContainer, sortOrders);
// activeTagUpdater("RTS");
sortByContext(sortParams, items);
itemNameFiller(items);
// console.log(itemNames);

function itemNameFiller(collection) {
  for (let j = 0; j < collection.length; j++) {
    itemNames.push(collection[j].name.toLowerCase());
  }
}

function processRelevantData(collection) {
  let tempCollection = [];
  for (let i = 0; i < collection.length; i++) {
    tempCollection.push(asciiFy(collection[i]));
  }
  // console.log(tempCollection);

  tempCollection.sort((a, b) => a - b);
  asciiFormCollection = tempCollection;
}

function selectPopulator(container, collection) {
  let elements = "";

  for (let i = 0; i < collection.length; i++) {
    elements += tagSelectProp(collection[i]);
  }
  container.innerHTML = elements;
}

function activeTagUpdater(tagName) {
  if (activeTags.find((elm) => elm === tagName) === undefined) {
    activeTags.push(tagName);

    let elements = "";
    for (let i = 0; i < activeTags.length; i++) {
      elements += activeTagsProp(activeTags[i]);
    }
    activeTagsView.innerHTML = elements;
  }
}

// function matchKey(pattern, index) {
//   //main filter

//   let token = pattern.toLowerCase().trim();

//   if (token === "") return true;

//   if (itemNames[index].includes(token)) {
//     return true;
//   } else return false;
// }

// function filterByToken(collection, token) {
//   let items = "";
//   let formedCollection = [];
//   //   console.log(searchKey);
//   console.log(asciiFormCollection);

//   for (let i = 0; i < collection.length; i++) {
//     let tags = "";
//     let flagKeys = [];

//     for (let j = 0; j < collection[i].tags.length; j++) {
//       let currentTag = collection[i].tags[j];
//       let asciiForm = asciiFy(currentTag);

//       if (asciiFormCollection.length > 0) {
//         if (
//           BINARYSEARCH(
//             asciiFormCollection,
//             0,
//             asciiFormCollection.length - 1,
//             asciiForm
//           )[0]
//         )
//           flagKeys.push(1);
//       } else flagKeys.push(1);
//       tags += tagProp(currentTag);
//     }
//     console.log(tags);

//     let flagKeySum = flagKeys.reduce((partialSum, a) => partialSum + a, 0);
//     let matches = matchKey(token, i);
//     // console.log(
//     //   flagKeys,
//     //
//     // );

//     if (matches) {
//       formedCollection.push(collection[i]);
//       if (asciiFormCollection.length < 2) {
//         if (flagKeySum > 0) {
//           items += itemProp(tags, collection[i].name, collection[i].desc);
//         }
//       } else {
//         if (flagKeySum === asciiFormCollection.length)
//           items += itemProp(tags, collection[i].name, collection[i].desc);
//       }
//     }
//   }

//   console.log("formedCollection :", formedCollection);

//   return items;
// }

// function updateItems(token) {
//   console.log(token);

//   let itemsInner = filterByToken(items, token);
//   itemContainer.innerHTML = itemsInner;
// }

function matchKey(pattern, index) {
  //main filter

  let token = pattern.toLowerCase().trim();

  if (token === "") return true;

  if (itemNames[index].includes(token)) {
    return true;
  } else return false;
}

function filterByToken(collection, token) {
  let formedCollection = [];

  for (let i = 0; i < collection.length; i++) {
    let matches = matchKey(token, i);

    if (matches) {
      formedCollection.push(collection[i]);
    }
  }

  // console.log("formedCollection :", formedCollection);

  return formedCollection;
}

function filterByTag(collection) {
  let flagKeySum = [];
  let tagsInItems = [];
  for (let i = 0; i < collection.length; i++) {
    let tags = "";
    let flagKeys = [];

    for (let j = 0; j < collection[i].tags.length; j++) {
      // console.log(collection[i].tags.length);

      let currentTag = collection[i].tags[j];
      let asciiForm = asciiFy(currentTag);

      if (asciiFormCollection.length > 0) {
        if (
          BINARYSEARCH(
            asciiFormCollection,
            0,
            asciiFormCollection.length - 1,
            asciiForm
          )[0]
        )
          flagKeys.push(1);
      } else flagKeys.push(1);
      tags += tagProp(currentTag);
    }
    tagsInItems.push(tags);
    flagKeySum.push(flagKeys.reduce((partialSum, a) => partialSum + a, 0));
  }

  return { flagKeySum, tagsInItems };
}

function populateItemCollectionHTML(collection, flagKeySum, tagsInItems) {
  let items = "";
  for (let i = 0; i < collection.length; i++) {
    let dateFormatted = new Date(collection[i].date)
      .toISOString()
      .replace(/T|Z/g, " ");
    console.log(dateFormatted);

    if (asciiFormCollection.length < 2) {
      if (flagKeySum[i] > 0) {
        items += itemProp(
          tagsInItems[i],
          collection[i].name,
          collection[i].desc,
          dateFormatted
        );
      }
    } else {
      if (flagKeySum[i] === asciiFormCollection.length)
        items += itemProp(
          tagsInItems[i],
          collection[i].name,
          collection[i].desc,
          dateFormatted
        );
    }
  }
  return items;
}

function sortByContext(context, collection) {
  let sortedCollection = collection.slice();
  let sortParamType = context.sortType.split(" ")[1].toLowerCase();
  let sortParamOrder = context.sortOrder;

  sortedCollection.sort(function (a, b) {
    let value1 = a[sortParamType];
    let value2 = b[sortParamType];
    if (sortParamOrder === "Descending") {
      if (sortParamType === "name") {
        return value1.localeCompare(value2);
      }

      return value1 - value2;
    } else {
      if (sortParamType === "name") {
        return value2.localeCompare(value1);
      }

      return value2 - value1;
    }
  });

  updateItems(searchKey, sortedCollection);
}

function updateItems(token, collection) {
  let filteredCollectionByToken = filterByToken(collection, token);
  let tagFilterObject = filterByTag(filteredCollectionByToken);
  let tagActive = tagFilterObject.tagsInItems;
  let tagKeyFlagSum = tagFilterObject.flagKeySum;

  let finalItems = populateItemCollectionHTML(
    filteredCollectionByToken,
    tagKeyFlagSum,
    tagActive
  );

  itemContainer.innerHTML = finalItems;
}

search.addEventListener("input", (e) => {
  searchKey = search.value;

  updateItems(searchKey, items);
});

tagSelect.addEventListener("change", () => {
  let tagName = tagSelect.value;

  activeTagUpdater(tagName);
  processRelevantData(activeTags);

  updateItems(searchKey, items);
});

sortOrderContainer.addEventListener("change", () => {
  sortParams.sortOrder = sortOrderContainer.value;
  sortByContext(sortParams, items);
});

sortTypesContainer.addEventListener("change", () => {
  sortParams.sortType = sortTypesContainer.value;
  sortByContext(sortParams, items);
});

document.body.addEventListener("click", (e) => {
  let target = e.target;
  let targetClass = target.className;

  if (targetClass.includes("close")) {
    let tag = target.closest(".align");
    let tagName = tag.textContent;

    tag.remove();
    for (let i = 0; i < activeTags.length; i++) {
      if (activeTags[i] === tagName) {
        activeTags.splice(i, 1);
      }
    }

    tagSelect.value = "none";
    processRelevantData(activeTags);
    updateItems(searchKey, items);
  }
});
