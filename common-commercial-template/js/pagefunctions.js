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

function prepeareFeature(elm, extraClass, extraClass1, extraClass2) {
  return ` <div class="featured_item ${extraClass}" id="${elm.id}">
    <img
      class="featured_img ${extraClass2} ${extraClass1}"
      id="${elm.id}"
      src="${elm.img}"
      alt=""
    />
    <div class="feature_detail ${extraClass1}" id="${elm.id}">
      ${elm.featureDetail}
    </div>
    <div class="details feature_${extraClass1} ${extraClass1}" id="${elm.id}">
      <div class="detail_inner_cont ${extraClass1}" id="${elm.id}">
        <p class="item_name ${extraClass1}" id="${elm.id}">${elm.name}</p>
        <p class="available ${extraClass1}" id="${elm.id}">${elm.stock}</p>
      </div>
      <div class="detail_inner_cont ${extraClass1}" id="${elm.id}">
        <p class="${extraClass1}" id="${elm.id}">Date added :</p>
        <p class="date_added ${extraClass1}" id="${elm.id}">${elm.date}</p>
      </div>
      <div class="detail_inner_cont ${extraClass1}" id="${elm.id}">
        <p class="${extraClass1}" id="${elm.id}">Price :</p>
        <p class="item_price ${extraClass1}" id="${elm.id}">${elm.price}</p>
      </div>
      <div class="description feature_desc ${extraClass1}" id="${elm.id}">
        <p class="item_desc ${extraClass1}" id="${elm.id}">
         ${elm.description}
        </p>
      </div>
    </div>
  </div>`;
}
