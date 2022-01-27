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
  featureCards: GETDOMQUERY(".feature_feature_card"),
  featureInnerCont: GETDOMQUERY(".inner_cont"),
  featurePageNo: GETDOMQUERY(".page_no"),
};

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
  categories: [],
  features: [
    {
      stock: "In stock",
      itemLeft: 28,
      id: "fi1",
      img: "./public/images/test.jpg",
      name: "Deer marker 290",
      date: "28/09/2019",
      dateUnformatted: 200000988,
      price: "28tk",
      description:
        "orem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem voluptates veniam esse quas totam aliquam architecto, officia ullam, earum, deleniti reprehenderit beatae mollitia. Amet, nesciunt praesentium perspiciatis fugit quam omnis in rem dignissimos? Esse, aut quos. Pariatur",
      featureDetail: "orem ipsum dolor sit amet consectetur.",
    },
    {
      stock: "In stock",
      itemLeft: 28,
      id: "fi2",
      img: "./public/images/test.jpg",
      name: "Deer marker 290",
      date: "28/09/2019",
      dateUnformatted: 200000988,
      price: "28tk",
      description:
        "orem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem voluptates veniam esse quas totam aliquam architecto, officia ullam, earum, deleniti reprehenderit beatae mollitia. Amet, nesciunt praesentium perspiciatis fugit quam omnis in rem dignissimos? Esse, aut quos. Pariatur",
      featureDetail: "orem ipsum dolor sit amet consectetur.",
    },
    {
      stock: "In stock",
      itemLeft: 28,
      id: "fi3",
      img: "./public/images/test.jpg",
      name: "Deer marker 290",
      date: "28/09/2019",
      dateUnformatted: 200000988,
      price: "28tk",
      description:
        "orem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem voluptates veniam esse quas totam aliquam architecto, officia ullam, earum, deleniti reprehenderit beatae mollitia. Amet, nesciunt praesentium perspiciatis fugit quam omnis in rem dignissimos? Esse, aut quos. Pariatur",
      featureDetail: "orem ipsum dolor sit amet consectetur.",
    },
    {
      stock: "In stock",
      itemLeft: 28,
      id: "fi4",
      img: "./public/images/test.jpg",
      name: "Deer marker 290",
      date: "28/09/2019",
      dateUnformatted: 200000988,
      price: "28tk",
      description:
        "orem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem voluptates veniam esse quas totam aliquam architecto, officia ullam, earum, deleniti reprehenderit beatae mollitia. Amet, nesciunt praesentium perspiciatis fugit quam omnis in rem dignissimos? Esse, aut quos. Pariatur",
      featureDetail: "orem ipsum dolor sit amet consectetur.",
    },
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
    },
  ],
};

let temporaryVariables = {
  TimeOutFunctions: [],
};
// LOG(pageAnimationElements.logoAfter, "black", "white", "log");
