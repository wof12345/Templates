let mainBodyCards = document.querySelector(`.featured_main_body`);
let details_art_page = document.querySelector(".art_details");
let details_art_page_back = document.querySelector(".back_details");
let imageAngles = document.querySelectorAll(".angle_pics");
let mainDetailsImage = document.querySelector(".main_pic");
let showPage = document.querySelector(`.showcase_page`);
let backShowPgae = document.querySelector(`.showpage_back`);
let showPic = document.querySelector(`.show_img`);
let cardIndicator = document.querySelectorAll(`.cart_indicator`);

let pageUserData = {
  cart: [],
};

//driver
fillMainBody(6);

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
    window.location.href =
      "http://127.0.0.1:5500/Commercial_and_public_projects/remans-art-col/index.html";
  }
});

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
    genHtml += componentFunctionFeatureCard(i, "./remans-col/Painting 2.png");
  }

  mainBodyCards.innerHTML = genHtml;
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
    <p class="price" data-src="${src_context}">$664</p>
    <div class="shop_icons" data-src="${src_context}">
      <img src="./remans-col/button-share.png" alt="" />
      <img class="buy_btn" src="./remans-col/button-buy.png" alt="" />
    </div>
  </div>
</div>`;
}
