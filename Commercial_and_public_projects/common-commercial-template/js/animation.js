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
        `height:500px;opacity:1;`,
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

  pageBasicElements.featureConts.style = "height:380px";

  if (pageBasicElements.featureConts.length > 1) {
    if (last >= 0 && last < 4) {
      pageLogics.lastFeatureContainer = 0;
    } else if (last > 3 && last < 8) {
      pageLogics.lastFeatureContainer = 1;
    } else if (last > 7 && last < 12) {
      pageLogics.lastFeatureContainer = 2;
    } else if (last > 11 && last < 15) {
      pageLogics.lastFeatureContainer = 3;
    }

    pageBasicElements.featureConts[pageLogics.lastFeatureContainer].style =
      "height:380px";

    pageBasicElements.featureConts.forEach((elm, ind) => {
      if (ind !== pageLogics.lastFeatureContainer) {
        elm.style = "height:0px";
      }
    });
  }

  referenceArr[last].style = `background-color: rgba(102, 102, 102, 0.897);`;
  followerArr[last].style = `filter: blur(0px);`;

  for (let i = 0; i < length; i++) {
    if (i !== last) {
      referenceArr[i].style = ``;
      followerArr[i].style = ``;
    }
  }
}
