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
