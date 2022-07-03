document.addEventListener("mouseover", (e) => {
  let target = e.target;
  let targetClass = target.className;

  if (target) {
    // console.log(target);

    if (targetClass === pageAnimationElements.logoCover.className)
      animateLogo("in");

    if (targetClass.includes("cover_nav")) {
      let targetClass = target.closest(".nav__item");

      targetClass.classList.toggle("basichoverBackground");
      targetClass
        .querySelector(".nav__link")
        .classList.toggle("nav_link_animation");
    }

    if (targetClass.includes("catag") || targetClass.includes("categorymain")) {
      TIMEOUT(collapseCatag.bind(this, false), 500);
    }

    if (!targetClass.includes("categories")) {
      collapseCatag(true);
    }
    if (targetClass.includes("category_item")) {
      collapseCatag(false);
    }

    if (targetClass.includes("nav")) {
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

    if (targetClass.includes("feature_card")) {
      let elm = target.closest(".featured_item");
      // console.log(elm);

      let id = elm.dataset.id;

      let featureDet = document.getElementById(`${id}dfc`);
      let featureCardDet = elm.querySelector(".feature_feature_card");
      APPLYSTYLES(
        [elm, featureCardDet, featureDet],
        ["opacity:1;", "bottom:0;top:70px;", "opacity:1;"]
      );
    }
  }
});

document.addEventListener("mouseout", (e) => {
  let target = e.target;
  let targetClass = target.className;
  if (target) {
    if (targetClass === pageAnimationElements.logoCover.className)
      animateLogo("out");

    if (targetClass.includes("cover_nav")) {
      let targetClass = target.closest(".nav__item");

      targetClass.classList.toggle("basichoverBackground");
      targetClass
        .querySelector(".nav__link")
        .classList.toggle("nav_link_animation");
    }

    if (targetClass.includes("categories")) {
      collapseCatag(true);
    }

    if (targetClass.includes("nav")) {
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

    if (targetClass.includes("feature_card")) {
      let elm = target.closest(".featured_item");
      // console.log(elm);

      let id = elm.dataset.id;
      let featureDet = document.getElementById(`${id}dfc`);

      let featureCardDet = elm.querySelector(".feature_feature_card");
      console.log(featureDet);

      APPLYSTYLES([elm, featureCardDet, featureDet], ["", "", ""]);
    }
  }
});

document.addEventListener("click", (e) => {
  let target = e.target;
  let targetClass = target.className;

  if (targetClass.includes("catag"))
    collapseCatag(pageLogics.catagoriesCollapsed);

  if (targetClass.includes("img_cover")) animateMenu(!pageLogics.menu_open);
  else {
    animateMenu(false);
  }

  if (targetClass.includes("catag")) {
    animateMenu(true);
  }

  if (targetClass.includes("feature_card") || targetClass.includes("circle")) {
    let id = target.dataset.serial.match(/(\d+)/)[0];

    featuredAnimation(id - 1);
  }

  if (targetClass.includes("left_feature_cover")) {
    featuredAnimation(--pageLogics.lastFeatureItem);
  }

  if (targetClass.includes("right_feature_cover")) {
    featuredAnimation(++pageLogics.lastFeatureItem);
  }

  if (targetClass.includes("category_item")) {
    let currentCatag = target.textContent.split("(")[0];
    console.log(currentCatag);

    populateItems(pageData.pageItems, currentCatag);
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

pageBasicElements.navBtns[3].addEventListener("click", () => {
  window.location.href = "../index.html";
});

// console.log(
//   pageBasicElements.headElementsItems,
//   pageBasicElements.headElementsLinks
// );
