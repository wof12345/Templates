let mainContainer = document.querySelector(`.featured_section_body`);
let mainBodyCards = document.querySelector(`.featured_main_body`);
let details_art_page = document.querySelector(".art_details");
let details_art_page_back = document.querySelector(".back_details");
let imageAngles = document.querySelectorAll(".angle_pics");
let mainDetailsImage = document.querySelector(".main_pic");
let showPage = document.querySelector(`.showcase_page`);
let backShowPgae = document.querySelector(`.showpage_back`);
let showPic = document.querySelector(`.show_img`);
let cardIndicator = document.querySelectorAll(`.cart_indicator`);

let costDetails = document.querySelectorAll(`.costs`);

let productContainer = document.querySelector(`.product_display`);

let cartInfoContainer = document.querySelector(`.cart_info`);
let cartInfo = document.querySelectorAll(`.ci`);

let pageUserData = {
  cart: [],
};

let logics = {
  lastKnownScroll: -1,
};

let userCart = {
  products: 0,
  price: 0,
  delivery: 0,
  shipping: 0,
  totalPrice: 0,
  tax: 0,
  totalPriceWithTax: 0,
};

//driver
fillMainBody(6);

mainContainer.addEventListener("click", () => {
  console.log(mainContainer.scrollLeft);
});

setInterval(() => {
  let left = mainContainer.scrollLeft;
  let scrollValue = 150;

  if (logics.lastKnownScroll === mainContainer.scrollLeft) {
    left = -scrollValue;
  }

  mainContainer.scrollTo({
    left: left + scrollValue,
    behavior: "smooth",
  });

  // mainContainer.scrollLeft += 200;
  logics.lastKnownScroll = mainContainer.scrollLeft;
}, 2000);

document.addEventListener("click", (e) => {
  let targetElm = e.target;
  let ElmData = targetElm.dataset.src;
  let targetElmClass = targetElm.className;

  console.log(targetElmClass);

  if (ElmData) {
    invokeDetailsPage(ElmData);
  }

  if (targetElmClass === "show_page_link") {
    let mainPic = document.querySelector(`.main_pic`).src;
    invokeShowPage(mainPic);
  }

  if (targetElmClass === "buy_btn") {
    pageUserData.cart.push(targetElm);
    cardIndicator.forEach((elm) => {
      elm.innerHTML = pageUserData.cart.length;
    });
  }

  if (targetElmClass === "add_to_cart") {
    window.location.href = "./index.html";
  }

  if (targetElmClass === "buy_btn") {
    let parent = targetElm.closest(".feature_pricing ");
    let price = parent.querySelector(".price").textContent;
    price = price.slice(1, price.length);
    generaLizeCart(costDetails, price);
  }

  if (targetElmClass.includes("check_out")) {
    if (pageUserData.cart.length > 0) {
      populateInfoMessage(true);
    } else {
      populateInfoMessage(false);
    }
  }

  if (targetElmClass.includes("confirm")) {
    cartInfoContainer.classList.add("d-none");
  }
});

function populateInfoMessage(command) {
  cartInfoContainer.classList.remove("d-none");
  if (command) {
    cartInfo[0].src = "./remans-col/circle_check.png";
    cartInfo[1].textContent = `Added ${userCart.products} products to cart.`;
    cartInfo[2].textContent = `The total price ise ${userCart.price}.`;
  } else {
    cartInfo[0].src = "./remans-col/Group 38285.png";
    cartInfo[1].textContent = `Cart is empty!`;
    cartInfo[2].textContent = ``;
  }
}

// let userCart = {
//   products: 0,
//   price: 0,
//   delivery: 0,
//   shipping: 0,
//   totalPrice: 0,
//   tax: 0,
//   totalPriceWithTax: 0,
// };

function generaLizeCart(contextFields, price) {
  //uses userCart global object variable

  userCart.products++;
  price = +price;
  price += +userCart.price;

  contextFields[0].textContent = userCart.products;
  contextFields[1].textContent = userCart.price = price;
  contextFields[2].textContent = userCart.delivery = 200;
  contextFields[3].textContent = userCart.shipping = 500;
  contextFields[4].textContent = userCart.totalPrice =
    price + userCart.delivery + userCart.shipping;
  contextFields[5].textContent = userCart.tax = "14%";
  contextFields[6].textContent = userCart.totalPriceWithTax =
    userCart.totalPrice + (14 * userCart.totalPrice) / 100;
}

details_art_page_back.addEventListener("click", (e) => {
  detainDetailsPage();
});

backShowPgae.addEventListener("click", () => {
  detainShowPage();
});

function invokeDetailsPage(src) {
  details_art_page.style = "opacity: 1;pointer-events: all;";
  mainDetailsImage.src = src;

  imageAngles.forEach((elm) => {
    elm.src = src;
  });
}

function detainDetailsPage() {
  details_art_page.style = "";
}

function invokeShowPage(src) {
  showPage.style = "left:0";
  showPic.src = src;
}

function detainShowPage() {
  showPage.style = "";
}

function fillMainBody(number) {
  let genHtml = "";
  for (let i = 0; i < number; i++) {
    genHtml += componentFunctionFeatureCard(
      i,
      `./remans-col/${GENERATERANDOMNUMBER([], 1, 10, "integer")}.png`
    );
  }

  mainBodyCards.innerHTML = genHtml;
  productContainer.innerHTML = genHtml;
}

function componentFunctionFeatureCard(number, src_context) {
  return `<div class="feature_card" id = ${number} data-src="${src_context}">
  <div class="img_part" data-src="${src_context}">
    <img
      src="${src_context}"
      data-src="${src_context}"
      alt=""
    />
  </div>
  <div class="feature_desc" data-src="${src_context}">
    <p class="feature_title" data-src="${src_context}">
      J Resistance
    </p>
    <p
      class="feature_artist"
      data-src="${src_context}"
    >
      Ria Arante
    </p>
    <p class="feature_date" data-src="${src_context}">
      Gouache On paper
    </p>
    <p
      class="feature_source hidden"
      data-src="${src_context}"
    >
      <i data-src="${src_context}">
        Oil on Canvas, 2008
      </i>
    </p>
    <p
      class="feature_size hidden"
      data-src="${src_context}"
    >
      <i data-src="${src_context}"> 23 x 21 in</i>
    </p>
  </div>
  <div
    class="feature_pricing hidden"
    data-src="${src_context}"
  >
    <p class="price" data-src="${src_context}">$${GENERATERANDOMNUMBER(
    [],
    100,
    5000,
    "integer"
  )}</p>
    <div class="shop_icons" data-src="${src_context}">
      <img src="./remans-col/button-share.png" alt="" />
      <img class="buy_btn" src="./remans-col/button-buy.png" alt="" />
    </div>
  </div>
</div>`;
}
