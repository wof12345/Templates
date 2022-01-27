function updateVariables() {
  pageBasicElements.bodySection = GETDOMQUERY(".body_section");
  pageBasicElements.headsection = GETDOMQUERY(".head_section");
  pageBasicElements.headElementsLinks = GETDOMQUERY(".nav__link");
  pageBasicElements.headElementsItems = GETDOMQUERY(".nav__item");
  pageBasicElements.catagoriesCont = GETDOMQUERY(".categories");
  pageBasicElements.searchBar = GETDOMQUERY(".search_bar");
  pageBasicElements.searchBarInp = GETDOMQUERY("#search_input");
  pageBasicElements.searchBarBtn = GETDOMQUERY(".search_btn");
  pageBasicElements.searchBarImg = GETDOMQUERY(".search_img");
  pageBasicElements.headlineCont = GETDOMQUERY(".headline_cont");
  pageBasicElements.headline = GETDOMQUERY(".headlines");
  pageBasicElements.featureLeft = GETDOMQUERY(".left_feature_cover");
  pageBasicElements.featureRight = GETDOMQUERY(".right_feature_cover");
  pageBasicElements.featureCircle = GETDOMQUERY(".circle");
  pageBasicElements.featureFeatures = GETDOMQUERY(".featured_item");
  pageBasicElements.featureConts = GETDOMQUERY(".featured");
  pageBasicElements.featureDetails = GETDOMQUERY(".feature_detail");
  pageBasicElements.featureCards = GETDOMQUERY(".feature_feature_card");
  pageBasicElements.featureInnerCont = GETDOMQUERY(".inner_cont");
  pageBasicElements.featurePageNo = GETDOMQUERY(".page_no");
}

function prepeareFeature(elm) {
  return ` <div class="featured_item feature_item" id="${elm.id}">
    <img
      class="featured_img feature_img feature_card"
      id="${elm.id}"
      src="${elm.img}"
      alt=""
    />
    <div class="feature_detail feature_card" id="${elm.id}">
      ${elm.featureDetail}
    </div>
    <div class="details feature_feature_card feature_card" id="${elm.id}">
      <div class="detail_inner_cont feature_card" id="${elm.id}">
        <p class="item_name feature_card" id="${elm.id}">Deer matker 290</p>
        <p class="available feature_card" id="${elm.id}">${elm.stock}</p>
      </div>
      <div class="detail_inner_cont feature_card" id="${elm.id}">
        <p class="feature_card" id="${elm.id}">Date added :</p>
        <p class="date_added feature_card" id="${elm.id}">${elm.date}</p>
      </div>
      <div class="detail_inner_cont feature_card" id="${elm.id}">
        <p class="feature_card" id="${elm.id}">Price :</p>
        <p class="item_price feature_card" id="${elm.id}">${elm.price}</p>
      </div>
      <div class="description feature_desc feature_card" id="${elm.id}">
        <p class="item_desc feature_card" id="${elm.id}">
         ${elm.description}
        </p>
      </div>
    </div>
  </div>`;
}
