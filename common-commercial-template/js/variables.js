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
};

let pageLogics = {
  logoAnimationDone: false,
  catagoriesCollapsed: false,
  menu_open: false,
  searchBarCollapsed: false,
  searchFocused: false,
  lastFeatureItem: -1,
};

let pageData = {
  categories: [],
};

let temporaryVariables = {
  TimeOutFunctions: [],
};
// LOG(pageAnimationElements.logoAfter, "black", "white", "log");
