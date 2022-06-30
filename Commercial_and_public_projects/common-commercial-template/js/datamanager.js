function populateCatagories() {
  let catagArray = [];
  for (let i = 0; i < pageData.categories.length; i++) {
    catagArray.push(
      `<div class="category_item">${pageData.categories[i][0]}(${pageData.categories[i][1]})</div>`
    );
  }

  let data = "";

  for (let i = 0; i < catagArray.length; i++) {
    data += catagArray[i];
  }

  if (catagArray.length < 20) {
    pageBasicElements.catagoriesCont.style =
      "grid-template-columns: repeat(1, 100%);";
  }

  pageBasicElements.catagoriesCont.innerHTML = data;
}

function populateHeadline() {
  pageBasicElements.headline.textContent = pageData.headLine;
}

function populateFeature(collection) {
  let item = 1;

  let finalHTML = `<div class="featured" id="1">`;
  let pageHTML = ``;
  let id = 1;

  pageData.features.forEach((elm, ind) => {
    elm.id = item;
    finalHTML += prepareItem(
      elm,
      "feature_item",
      "feature_card",
      "feature_img",
      "feature_detail",
      "feature",
      elm.tag
    );
    pageHTML += `<div class="circle" id="fc${ind + 1}"></div>`;
    if ((ind + 1) % 4 === 0)
      finalHTML += `</div><div class="featured" id="${++id}">`;

    item++;
  });
  // console.log(finalHTML);

  pageBasicElements.featureInnerCont.innerHTML = finalHTML;
  pageBasicElements.featurePageNo.innerHTML = pageHTML;
}

function populateItems(collection, query) {
  pageBasicElements.item_view_head.textContent = `Tag : ${query}`;

  if (query !== "Latest") {
    collection = filterItems(query);
  }

  let item = 1;
  let finalHTML = ``;
  collection.forEach((elm, ind) => {
    elm.id = item;
    finalHTML += prepareItem(
      elm,
      "view_item",
      "",
      "feature_card",
      "feature_details",
      "item",
      elm.tag
    );
    item++;
  });
  // console.log(finalHTML);

  pageBasicElements.itemViewCont.innerHTML = finalHTML;
}

function filterItems(tag) {
  let collection = [];
  for (let i = 0; i < pageData.pageItems.length; i++) {
    if (pageData.pageItems[i].tag === tag) {
      collection.push(pageData.pageItems[i]);
    }
  }

  return collection;
}
