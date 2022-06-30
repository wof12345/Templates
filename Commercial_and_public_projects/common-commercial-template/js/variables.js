let pageAnimationElements = {
  nav: GETDOMQUERY(".nav"),
  navLogo: GETDOMQUERY(`.nav__logo`),
  logoBefore: GETDOMQUERY(".before"),
  logoAfter: GETDOMQUERY(".after"),
  logoLeft: GETDOMQUERY(".left"),
  logoRight: GETDOMQUERY(".right"),
  logoText: GETDOMQUERY(".nav__logo_text"),
  logoCover: GETDOMQUERY(".cover"),
  logoLetters: GETDOMQUERY(".logo__text_letter"),
  menuimg: GETDOMQUERY(".menu_img"),
  menuItems: GETDOMQUERY(".menu_item"),
  asideMenu: GETDOMQUERY(".nav_aside_links"),
};

let pageBasicElements = {
  item_view_head: GETDOMQUERY("h1"),
  bodySection: GETDOMQUERY(".body_section"),
  headsection: GETDOMQUERY(".head_section"),
  headElementsLinks: GETDOMQUERY(".nav__link"),
  headElementsItems: GETDOMQUERY(".nav__item"),
  catagoriesCont: GETDOMQUERY(".categories"),
  searchBar: GETDOMQUERY(".search_bar"),
  searchBarInp: GETDOMQUERY("#search_input"),
  searchBarBtn: GETDOMQUERY(".search_btn"),
  searchBarImg: GETDOMQUERY(".search_img"),
  headlineCont: GETDOMQUERY(".headline_cont"),
  headline: GETDOMQUERY(".headlines"),
  featureLeft: GETDOMQUERY(".left_feature_cover"),
  featureRight: GETDOMQUERY(".right_feature_cover"),
  featureCircle: GETDOMQUERY(".circle"),
  featureFeatures: GETDOMQUERY(".featured_item"),
  featureConts: GETDOMQUERY(".featured"),
  featureDetails: GETDOMQUERY(".feature_detail"),
  featureDetailsItems: GETDOMQUERY(".feature_details"),
  featureCards: GETDOMQUERY(".feature_feature_card"),
  featureInnerCont: GETDOMQUERY(".inner_cont"),
  featurePageNo: GETDOMQUERY(".page_no"),
  itemViewCont: GETDOMQUERY(".items_view"),
  navBtns: GETDOMQUERY(".cover_nav"),
};

console.log(pageBasicElements.item_view_head);

let pageLogics = {
  logoAnimationDone: false,
  catagoriesCollapsed: false,
  menu_open: false,
  searchBarCollapsed: false,
  searchFocused: false,
  lastFeatureItem: -1,
  lastFeatureContainer: 0,
  iteration: 1,
};

let pageData = {
  headLine: "Welcome to Drop n shop!",
  categories: [
    ["Clothing", 6],
    ["Deodorant", 6],
    ["Watch", 6],
    ["Wallet", 6],
    ["Shoes", 6],
    ["Latest", 28],
  ],
  features: [
    {
      stock: "In stock",
      itemLeft: 28,
      id: "fi5",
      img: "./public/images/test.jpg",
      name: "Deer marker 290",
      date: "28/09/2019",
      dateUnformatted: 200000988,
      price: "28tk",
      description:
        "orem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem voluptates veniam esse quas totam aliquam architecto, officia ullam, earum, deleniti reprehenderit beatae mollitia. Amet, nesciunt praesentium perspiciatis fugit quam omnis in rem dignissimos? Esse, aut quos. Pariatur",
      featureDetail: "orem ipsum dolor sit amet consectetur.",
      tag: "Clothing",
    },
    {
      stock: "In stock",
      itemLeft: 28,
      id: "fi6",
      img: "./public/images/test.jpg",
      name: "Deer marker 290",
      date: "28/09/2019",
      dateUnformatted: 200000988,
      price: "28tk",
      description:
        "orem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem voluptates veniam esse quas totam aliquam architecto, officia ullam, earum, deleniti reprehenderit beatae mollitia. Amet, nesciunt praesentium perspiciatis fugit quam omnis in rem dignissimos? Esse, aut quos. Pariatur",
      featureDetail: "orem ipsum dolor sit amet consectetur.",
      tag: "Clothing",
    },
    {
      stock: "In stock",
      itemLeft: 28,
      id: "fi7",
      img: "./public/images/test.jpg",
      name: "Deer marker 290",
      date: "28/09/2019",
      dateUnformatted: 200000988,
      price: "28tk",
      description:
        "orem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem voluptates veniam esse quas totam aliquam architecto, officia ullam, earum, deleniti reprehenderit beatae mollitia. Amet, nesciunt praesentium perspiciatis fugit quam omnis in rem dignissimos? Esse, aut quos. Pariatur",
      featureDetail: "orem ipsum dolor sit amet consectetur.",
      tag: "Clothing",
    },
  ],
  pageItems: [],
};

let temporaryVariables = {
  TimeOutFunctions: [],
};
// LOG(pageAnimationElements.logoAfter, "black", "white", "log");

function prepareItem(
  elm,
  extraClass,
  extraClass1,
  extraClass2,
  extraClass3,
  extraItemId,
  tagName
) {
  return ` <div class="featured_item ${extraClass}" id=${elm.id} data-id="${
    elm.id + extraItemId
  }" data-tag="${tagName}">
    <img
      class="featured_img ${extraClass2} ${extraClass1}"
      data-id="${elm.id + extraItemId}"
      src="${elm.img}"
      alt=""
    />
    <div class="${extraClass3} ${extraClass1}" data-id="${
    elm.id + extraItemId
  }">
      ${elm.featureDetail}
    </div>
    <div class="details feature_${extraClass1} ${extraClass1}" data-id="${
    elm.id + extraItemId
  }">
      <div class="detail_inner_cont ${extraClass1}" data-id="${
    elm.id + extraItemId
  }">
        <p class="item_name ${extraClass1}" data-id="${elm.id + extraItemId}">${
    elm.name
  }</p>
        <p class="available ${extraClass1}" data-id="${elm.id + extraItemId}">${
    elm.stock
  }</p>
      </div>
      <div class="detail_inner_cont ${extraClass1}" data-id="${
    elm.id + extraItemId
  }">
        <p class="${extraClass1}" data-id="${
    elm.id + extraItemId
  }">Date added :</p>
        <p class="date_added ${extraClass1}" data-id="${
    elm.id + extraItemId
  }">${elm.date}</p>
      </div>
      <div class="detail_inner_cont ${extraClass1}" data-id="${
    elm.id + extraItemId
  }">
        <p class="${extraClass1}" data-id="${elm.id + extraItemId}">Price :</p>
        <p class="item_price ${extraClass1}" data-id="${
    elm.id + extraItemId
  }">${elm.price}</p>
      </div>
      <div class="description feature_desc ${extraClass1}" data-id="${
    elm.id + extraItemId
  }">
        <p class="item_desc ${extraClass1}" data-id="${elm.id + extraItemId}">
         ${elm.description}
        </p>
      </div>
    </div>
  </div>`;
}
