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
  pageBasicElements.featureDetailsItems = GETDOMQUERY(".feature_details");
  pageBasicElements.featureCards = GETDOMQUERY(".feature_feature_card");
  pageBasicElements.featureInnerCont = GETDOMQUERY(".inner_cont");
  pageBasicElements.featurePageNo = GETDOMQUERY(".page_no");
}

function prepeareFeature(
  elm,
  extraClass,
  extraClass1,
  extraClass2,
  extraClass3,
  extraItemId
) {
  return ` <div class="featured_item ${extraClass}" id="${
    elm.id + extraItemId
  }">
    <img
      class="featured_img ${extraClass2} ${extraClass1}"
      id="${elm.id + extraItemId}"
      src="${elm.img}"
      alt=""
    />
    <div class="${extraClass3} ${extraClass1}" id="${elm.id + extraItemId}">
      ${elm.featureDetail}
    </div>
    <div class="details feature_${extraClass1} ${extraClass1}" id="${
    elm.id + extraItemId
  }">
      <div class="detail_inner_cont ${extraClass1}" id="${
    elm.id + extraItemId
  }">
        <p class="item_name ${extraClass1}" id="${elm.id + extraItemId}">${
    elm.name
  }</p>
        <p class="available ${extraClass1}" id="${elm.id + extraItemId}">${
    elm.stock
  }</p>
      </div>
      <div class="detail_inner_cont ${extraClass1}" id="${
    elm.id + extraItemId
  }">
        <p class="${extraClass1}" id="${elm.id + extraItemId}">Date added :</p>
        <p class="date_added ${extraClass1}" id="${elm.id + extraItemId}">${
    elm.date
  }</p>
      </div>
      <div class="detail_inner_cont ${extraClass1}" id="${
    elm.id + extraItemId
  }">
        <p class="${extraClass1}" id="${elm.id + extraItemId}">Price :</p>
        <p class="item_price ${extraClass1}" id="${elm.id + extraItemId}">${
    elm.price
  }</p>
      </div>
      <div class="description feature_desc ${extraClass1}" id="${
    elm.id + extraItemId
  }">
        <p class="item_desc ${extraClass1}" id="${elm.id + extraItemId}">
         ${elm.description}
        </p>
      </div>
    </div>
  </div>`;
}
