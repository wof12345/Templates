function animateLogo(command) {
  if (command === "in") {
    logoInitAnimation();
  } else {
    logoOutAnimation();
  }
}

function collapseCatag(command) {
  if (!command) {
    APPLYSTYLES(
      [pageBasicElements.catagoriesCont],
      ["height:400px; opacity:1; padding: 7px;"]
    );
    pageLogics.catagoriesCollapsed = true;
  } else {
    APPLYSTYLES([pageBasicElements.catagoriesCont], [""]);
    pageLogics.catagoriesCollapsed = false;
  }
}

function animateMenu(command) {
  if (command) {
    APPLYSTYLES(
      [
        pageAnimationElements.menuItems[0],
        pageAnimationElements.menuItems[1],
        pageAnimationElements.menuItems[2],
        pageAnimationElements.asideMenu,
      ],
      [
        `transform:rotate(90deg)`,
        `transform:rotate(1deg)`,
        `transform:rotate(-90deg)`,
        `height:50%;opacity:1;`,
      ]
    );
    pageLogics.menu_open = true;
  } else {
    APPLYSTYLES(
      [
        pageAnimationElements.menuItems[0],
        pageAnimationElements.menuItems[1],
        pageAnimationElements.menuItems[2],
        pageAnimationElements.asideMenu,
      ],
      [``, ``, ``, ``, ``]
    );
    pageLogics.menu_open = false;
  }
}

function animateSearchBar(command) {
  if (!command) {
    APPLYSTYLES(
      [
        pageBasicElements.searchBar,
        pageBasicElements.headlineCont,
        pageBasicElements.headsection,
        pageBasicElements.bodySection,
      ],
      [
        `transform: translateY(0px);opacity:1;pointer-events:all;`,
        `transform: translateY(0px);`,
        `height:208.5`,
        `transform: translateY(68px);`,
      ]
    );
    pageLogics.searchBarCollapsed = true;
  } else {
    if (!pageLogics.searchFocused) {
      APPLYSTYLES(
        [
          pageBasicElements.searchBar,
          pageBasicElements.headlineCont,
          pageBasicElements.headsection,
          pageBasicElements.bodySection,
        ],
        [``, ``, ``, ``]
      );
      pageLogics.searchBarCollapsed = false;
    }
  }
}

function featuredAnimation(command) {
  let last;
  let referenceArr = pageBasicElements.featureCircle;
  let length = referenceArr.length;
  let followerArr = pageBasicElements.featureFeatures;
  if (command !== undefined) {
    pageLogics.lastFeatureItem = last = command;
  } else {
    pageLogics.lastFeatureItem += 1;
    last = pageLogics.lastFeatureItem;
  }

  if (last > length - 1) {
    last = pageLogics.lastFeatureItem = 0;
  }

  if (last < 0) {
    pageLogics.lastFeatureItem = last = length - 1;
  }

  referenceArr[last].style = `background-color: rgba(102, 102, 102, 0.897);`;
  followerArr[last].style = `background-color: rgba(102, 102, 102, 0.897);`;

  for (let i = 0; i < length; i++) {
    if (i !== last) {
      referenceArr[i].style = ``;
      followerArr[i].style = ``;
    }
  }
}
