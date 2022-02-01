populateFeature();
populateItems();
updateVariables();

document.addEventListener("mouseover", (e) => {
  let target = e.target;

  if (target) {
    // console.log(target);

    if (target.className === pageAnimationElements.logoCover.className)
      animateLogo("in");

    if (target.className.includes("cover_nav")) {
      let targetClass = target.closest(".nav__item");

      targetClass.classList.toggle("basichoverBackground");
      targetClass
        .querySelector(".nav__link")
        .classList.toggle("nav_link_animation");
    }

    if (
      target.className.includes("catag") ||
      target.className.includes("categorymain")
    ) {
      TIMEOUT(collapseCatag.bind(this, false), 500);
    }

    if (!target.className.includes("categories")) {
      collapseCatag(true);
    }
    if (target.className.includes("category_item")) {
      collapseCatag(false);
    }

    if (target.className.includes("nav")) {
      animateSearchBar(false);
      let left = pageAnimationElements.logoLeft.classList;
      let right = pageAnimationElements.logoRight.classList;
      if (
        !left.contains("rotation_animation") &&
        !right.contains("rotation_animation_inv")
      ) {
        left.add("rotation_animation");
        right.add("rotation_animation_inv");
      }
    }

    if (target.className.includes("feature_card")) {
      let id = target.getAttribute("id").match(/(\d+)/)[0];

      APPLYSTYLES(
        [
          pageBasicElements.featureDetails[id - 1],
          pageBasicElements.featureCards[id - 1],
        ],
        ["top:0;", "bottom:0;top:70px;"]
      );
    }
  }
});

document.addEventListener("mouseout", (e) => {
  let target = e.target;
  if (target) {
    if (target.className === pageAnimationElements.logoCover.className)
      animateLogo("out");

    if (target.className.includes("cover_nav")) {
      let targetClass = target.closest(".nav__item");

      targetClass.classList.toggle("basichoverBackground");
      targetClass
        .querySelector(".nav__link")
        .classList.toggle("nav_link_animation");
    }

    if (target.className.includes("categories")) {
      collapseCatag(true);
    }

    if (target.className.includes("nav")) {
      animateSearchBar(true);
      let left = pageAnimationElements.logoLeft.classList;
      let right = pageAnimationElements.logoRight.classList;
      if (
        left.contains("rotation_animation") &&
        right.contains("rotation_animation_inv")
      ) {
        left.remove("rotation_animation");
        right.remove("rotation_animation_inv");
      }
    }

    if (target.className.includes("feature_card")) {
      let id = target.getAttribute("id").match(/(\d+)/)[0];
      APPLYSTYLES(
        [
          pageBasicElements.featureDetails[id - 1],
          pageBasicElements.featureCards[id - 1],
        ],
        ["", ""]
      );
    }
  }
});

document.addEventListener("click", (e) => {
  let target = e.target;

  if (target.className.includes("catag"))
    collapseCatag(pageLogics.catagoriesCollapsed);

  if (target.className.includes("img_cover"))
    animateMenu(!pageLogics.menu_open);
  else {
    animateMenu(false);
  }

  if (target.className.includes("catag")) {
    animateMenu(true);
  }

  if (
    target.className.includes("feature_card") ||
    target.className.includes("circle")
  ) {
    let id = target.getAttribute("id").match(/(\d+)/)[0];

    featuredAnimation(id - 1);
  }

  if (target.className.includes("left_feature_cover")) {
    featuredAnimation(--pageLogics.lastFeatureItem);
  }

  if (target.className.includes("right_feature_cover")) {
    featuredAnimation(++pageLogics.lastFeatureItem);
  }
});

pageBasicElements.searchBarInp.addEventListener("focus", (e) => {
  pageLogics.searchFocused = true;
  pageBasicElements.searchBarImg.classList.toggle("search_img_animation");
});

pageBasicElements.searchBarInp.addEventListener("blur", (e) => {
  pageLogics.searchFocused = false;
  pageBasicElements.searchBarImg.classList.toggle("search_img_animation");
});

window.addEventListener("resize", (e) => {
  animateMenu(false);
});

INTERVAL(featuredAnimation, 3000);

// console.log(
//   pageBasicElements.headElementsItems,
//   pageBasicElements.headElementsLinks
// );
