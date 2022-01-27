for (let i = 0; i < 40; i++) {
  pageData.categories.push(`<div class="category_item">Electronics(28)</div>`);
}

let data = "";

for (let i = 0; i < 40; i++) {
  data += pageData.categories[i];
}

pageBasicElements.catagoriesCont.innerHTML = data;
pageBasicElements.headline.textContent =
  "Where am I? I was kidnapped!! I swear.";

function populateFeature() {
  let finalHTML = `<div class="featured" id="1">`;
  let pageHTML = ``;
  let id = 1;
  pageData.features.forEach((elm, ind) => {
    finalHTML += prepeareFeature(elm);
    pageHTML += `<div class="circle" id="fc${ind + 1}"></div>`;
    if ((ind + 1) % 4 === 0)
      finalHTML += `</div><div class="featured" id="${++id}">`;
  });
  console.log(finalHTML);

  pageBasicElements.featureInnerCont.innerHTML = finalHTML;
  pageBasicElements.featurePageNo.innerHTML = pageHTML;
}
