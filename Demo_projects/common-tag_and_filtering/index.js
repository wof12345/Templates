let tagSelect = GETDOMQUERY("#tag_filter");
let activeTagsView = GETDOMQUERY(".tags_select");
let search = GETDOMQUERY("#search");

let itemContainer = GETDOMQUERY(".items");

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

let itemProp = function (tags, name, desc) {
  return `<div class="item">
    <div class="tags">
    ${tags}
    </div>

    <div class="item_name">${name}</div>

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
  { tags: ["RTS", "Strategy"], name: "Sina", desc: "lorem" },
  { tags: ["Adventure", "FPS"], name: "Sona", desc: "lorem" },
  { tags: ["Action", "Strategy"], name: "Sion", desc: "lorem" },
  { tags: ["RTS", "Strategy"], name: "Sina", desc: "lorem" },
  { tags: ["Adventure", "FPS"], name: "Sona", desc: "lorem" },
  { tags: ["Action", "Strategy"], name: "Sion", desc: "lorem" },
  { tags: ["RTS", "Strategy"], name: "Sina", desc: "lorem" },
  { tags: ["Adventure", "FPS"], name: "Sona", desc: "lorem" },
  { tags: ["Action", "Strategy"], name: "Sion", desc: "lorem" },
  { tags: ["RTS", "Strategy"], name: "Sina", desc: "lorem" },
  { tags: ["Adventure", "FPS"], name: "Sona", desc: "lorem" },
  { tags: ["Action", "Strategy"], name: "Sion", desc: "lorem" },
  { tags: ["RTS", "Strategy"], name: "Sina", desc: "lorem" },
  { tags: ["Adventure", "FPS"], name: "Sona", desc: "lorem" },
  { tags: ["Action", "Strategy"], name: "Sion", desc: "lorem" },
  { tags: ["RTS", "Strategy"], name: "Sina", desc: "lorem" },
  { tags: ["Adventure", "FPS"], name: "Sona", desc: "lorem" },
  { tags: ["Action", "Strategy"], name: "Sion", desc: "lorem" },
  { tags: ["RTS", "Strategy"], name: "Sina", desc: "lorem" },
  { tags: ["Adventure", "FPS"], name: "Sona", desc: "lorem" },
  { tags: ["Action", "Strategy"], name: "Sion", desc: "lorem" },
  { tags: ["RTS", "Strategy"], name: "Sina", desc: "lorem" },
  { tags: ["Adventure", "FPS"], name: "Sona", desc: "lorem" },
  { tags: ["Action", "Strategy"], name: "Sion", desc: "lorem" },
  { tags: ["RTS", "Strategy"], name: "Sina", desc: "lorem" },
  { tags: ["Adventure", "FPS"], name: "Sona", desc: "lorem" },
  { tags: ["Action", "Strategy"], name: "Sion", desc: "lorem" },
  { tags: ["RTS", "Strategy"], name: "Sina", desc: "lorem" },
  { tags: ["Adventure", "FPS"], name: "Sona", desc: "lorem" },
  { tags: ["Action", "Strategy"], name: "Sion", desc: "lorem" },
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

// let tagString = "StrategyActionAdventureRTSEcciSimulationRPGFPSChildren";
let asciiFormCollection = [];
let activeTags = [];
let searchKey = "";

selectPopulator(tags);
// activeTagUpdater("RTS");
itemPopulator(items, searchKey);
itemNameFiller(items);
console.log(itemNames);

function asciiFy(collection) {
  let newElemValue = 0;
  //   console.log(collection);

  for (let j = 0; j < collection.length; j++) {
    newElemValue += collection.charCodeAt(j);
  }
  return newElemValue;
}

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
  tempCollection.sort((a, b) => a - b);
  asciiFormCollection = tempCollection;
  //   console.log(asciiFormCollection);
}

function selectPopulator(collection) {
  let elements = "";
  //   console.log(collection);

  for (let i = 0; i < collection.length; i++) {
    elements += tagSelectProp(collection[i]);
  }
  tagSelect.innerHTML = elements;
}

function activeTagUpdater(tagName) {
  if (activeTags.find((elm) => elm === tagName) === undefined) {
    activeTags.push(tagName);
    // console.log(activeTags);

    let elements = "";
    for (let i = 0; i < activeTags.length; i++) {
      elements += activeTagsProp(activeTags[i]);
    }
    activeTagsView.innerHTML = elements;
  }
}

function matchKey(pattern, index) {
  //   console.log(pattern);

  let token = pattern.toLowerCase().trim();

  if (token === "") return true;

  if (itemNames[index].includes(token)) {
    return true;
  } else return false;
}

function itemPopulator(collection, searchKeyref) {
  let items = "";
  //   console.log(searchKey);

  for (let i = 0; i < collection.length; i++) {
    let tags = "";
    let flagKeys = [];

    for (let j = 0; j < collection[i].tags.length; j++) {
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
    let flagKeySum = flagKeys.reduce((partialSum, a) => partialSum + a, 0);
    let matches = matchKey(searchKeyref, i);
    // console.log(
    //   flagKeys,
    //
    // );

    if (matches) {
      if (asciiFormCollection.length < 2) {
        if (flagKeySum > 0) {
          items += itemProp(tags, collection[i].name, collection[i].desc);
        }
      } else {
        if (flagKeySum === asciiFormCollection.length)
          items += itemProp(tags, collection[i].name, collection[i].desc);
      }
    }
  }

  itemContainer.innerHTML = items;
}

function updateItems(searchKeyref) {
  console.log(searchKeyref);

  itemPopulator(items, searchKeyref);
}

search.addEventListener("input", (e) => {
  searchKey = search.value;

  updateItems(searchKey);
});

tagSelect.addEventListener("change", () => {
  let tagName = tagSelect.value;
  console.log(tagName);

  activeTagUpdater(tagName);
  processRelevantData(activeTags);

  updateItems(searchKey);
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
    updateItems(searchKey);
  }
});
