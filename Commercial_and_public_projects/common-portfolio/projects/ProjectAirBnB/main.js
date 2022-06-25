//get classes
const navitems = document.querySelectorAll(".main_nav-nav--nav");
const navdec = document.querySelectorAll(".text-dec_nav");
const items = document.querySelectorAll(".items");
const itemBar = document.querySelectorAll(".item_bar");
const itemsExp = document.querySelector(".items_inner");
const menu = document.querySelector(".menu_drop");
const menudrp = document.querySelector(".floating_mag");
const input1 = document.getElementById("input");
const bg = document.querySelector(".main_bg");
const textsp = document.querySelectorAll(".items_btn-text");
const mainext = document.querySelector(".main_nav-exter");
const wholenav = document.querySelectorAll(".tohide");
const wholenavbody = document.querySelector(".main_nav");
const mainextcont = document.querySelector(".main_nav-exter");
const logotext = document.querySelector(".main_nav-logo--text");
const logoimg = document.querySelector(".main_nav-logo--img");
const bah = document.querySelector(".main_nav-nav2--btn1");
const bah1 = document.querySelector(".main_nav-nav2--btn2");
const menueimg = document.querySelector(".tochange");
const mainnavnavbody = document.querySelector(".main_nav-nav--nav-body");
const footermaincont = document.querySelector(".footer_maincont");
const footercontanernav = document.querySelectorAll(".footer_maincont-top-nav");
const item_bar1 = document.querySelectorAll(".item_bar1");
const footernavitems = document.querySelectorAll(".footer_maincont-cont-cont");
const mainheadnav = document.querySelector(".head_nav-main");
const mainfulbody = document.querySelector(".main_body-full");
const overlay = document.querySelector(".overlay");
//variables
let isat = 0;
let isdrped = false;
let isselected = false;
let ison = false;
let menuoff = false;

//functions
//scroll
window.addEventListener("scroll", function () {
  var scroll = window.scrollY;
  console.log();
  if (!ison) {
    if (scroll > 50) {
      mainext.classList.remove("hidden3");
      for (i = 0; i < 2; i++) {
        wholenav[i].classList.add("hidden3");
      }
      mainextcont.style = `overflow:visible`;
      mainheadnav.style = `background-color:white`;
      mainheadnav.classList.add("modifier5");
      wholenavbody.classList.add("modifier3");
      logotext.style = `color:#FF385C`;
      menudrp.style = `top:85px`;
      bah.classList.add("modifier");
      bah.classList.add("modifier2");
      bah1.classList.add("modifier2");
      logoimg.src = `Nec_pics/airbnbred.svg`;
      menueimg.src = `Nec_pics/worldr.svg`;
      ison = true;
      mainext.addEventListener("click", function () {
        if (!menuoff) {
          for (i = 0; i < 2; i++) {
            wholenav[i].classList.remove("hidden3");
          }
          for (i = 0; i < 3; i++) {
            navitems[i].classList.add("modifier");
          }
          mainextcont.style = `overflow:hidden`;
          mainext.classList.add("hidden3");
          for (i = 0; i < 3; i++) {
            navdec[i].classList.add("modifier");
          }
          menudrp.style = `top:85px`;
          menuoff = true;
          overlay.classList.remove("hidden2");
        }
      });
    }
  }
  if (scroll < 50) {
    mainext.classList.add("hidden3");
    for (i = 0; i < 2; i++) {
      wholenav[i].classList.remove("hidden3");
    }
    mainextcont.style = `overflow:hidden`;
    bah.classList.remove("modifier2");
    mainheadnav.style = `background-color:none`;
    mainheadnav.classList.remove("modifier5");
    wholenavbody.classList.remove("modifier3");
    logotext.style = `color:white`;
    menudrp.style = `top:140px`;
    bah1.classList.remove("modifier2");
    bah.classList.remove("modifier");
    logoimg.src = `Nec_pics/airbnblogo.svg`;
    menueimg.src = `Nec_pics/earth.svg`;
    ison = false;
  }
  if (menuoff) {
    for (i = 0; i < 2; i++) {
      wholenav[i].classList.add("hidden3");
    }
    for (i = 0; i < 3; i++) {
      navitems[i].classList.remove("modifier");
    }
    for (i = 0; i < 3; i++) {
      navdec[i].classList.remove("modifier");
    }
    overlay.classList.add("hidden2");
    mainextcont.style = `overflow:visible`;
    mainext.classList.remove("hidden3");
    menudrp.style = `top:85px`;
    menuoff = false;
  }
});
//main
navitems[isat].classList.add("fixed");
//nav action
for (const [i, cur] of navitems.entries()) {
  cur.addEventListener("mouseover", function () {
    if (isat !== i) {
      navdec[i].style = ` clip-path: inset(0px 48%);`;
    }
  });

  cur.addEventListener("mouseout", function () {
    if (isat !== i) {
      navdec[i].style = ` clip-path: inset(0px 50%);`;
    }
  });

  cur.addEventListener("click", function (d) {
    d.preventDefault();
    if (i <= 1 && isat !== i) {
      isat = i;
      if (i == 1) {
        navdec[i].style = ` clip-path: inset(0px 40%);`;
        navitems[i].classList.add("fixed");
        navdec[0].style = ` clip-path: inset(0px 50%);`;
        navitems[0].classList.remove("fixed");
        for (curin = 1; curin < 4; curin++) {
          items[curin].classList.add("hidden2");
        }
        itemsExp.classList.add("hidden2");
        items[4].classList.remove("hidden2");
        itemBar[2]?.classList.add("hidden1");
        itemBar[1]?.classList.add("hidden1");
      }
      if (i == 0) {
        navdec[i].style = ` clip-path: inset(0px 40%);`;
        navitems[i].classList.add("fixed");
        navdec[1].style = ` clip-path: inset(0px 50%);`;
        navitems[1].classList.remove("fixed");
        for (curin = 1; curin < 4; curin++) {
          items[curin].classList.remove("hidden2");
        }
        itemsExp.classList.remove("hidden2");
        items[4].classList.add("hidden2");
        itemBar[2]?.classList.remove("hidden1");
        itemBar[1]?.classList.remove("hidden1");
      }
    }
  });
}
//menu action
menu.addEventListener("click", function () {
  if (!isdrped) {
    menudrp.classList.remove("hidden2");
    isdrped = true;
  } else {
    menudrp.classList.add("hidden2");
    isdrped = false;
  }
});

//items action
for (const [i, cur] of items.entries()) {
  cur.addEventListener("mouseover", function () {
    itemBar[i]?.classList.add("hidden1");
    itemBar[i - 1]?.classList.add("hidden1");
    if (i === 4) {
      itemBar[0]?.classList.add("hidden1");
    }
  });

  cur.addEventListener("mouseout", function () {
    itemBar[i]?.classList.remove("hidden1");
    itemBar[i - 1]?.classList.remove("hidden1");
    itemBar[0]?.classList.remove("hidden1");
  });
}

//item2 action
input1.addEventListener("click", function () {
  if (!isselected) {
    items[0].classList.add("highlight");
    itemBar[0].style = `display:none`;
    isselected = true;
    for (i = 0; i < 2; i++) {
      if (i === 0) {
        textsp[i].style = `padding-right:70px`;
      } else textsp[i].classList.add("modifier11");
    }
  } else {
    items[0].classList.remove("highlight");
    itemBar[0].style = `display:visible`;
    isselected = false;
    for (i = 0; i < 2; i++) {
      if (i === 0) {
        textsp[i].style = `padding-right:0px`;
      } else textsp[i].classList.remove("modifier11");
    }
  }
});
//footer action
for (const [k, cur] of footercontanernav.entries()) {
  cur.addEventListener("click", function () {
    item_bar1[k].classList.remove("hidden1");
    cur.classList.add("fixed1");
    footernavitems[k].classList.remove("hidden2");
    for (i = 0; i < 5; i++) {
      if (i !== k) {
        footercontanernav[i].classList.remove("fixed1");
        item_bar1[i].classList.add("hidden1");
        footernavitems[i].classList.add("hidden2");
      }
    }
  });
}
//mainbody action
mainfulbody.addEventListener("click", function () {
  items[0].classList.remove("highlight");
  itemBar[0].style = `display:visible`;
  isselected = false;
  for (i = 0; i < 2; i++) {
    if (i === 0) {
      textsp[i].style = `padding-right:0px`;
    } else textsp[i].classList.remove("modifier11");
  }
  menudrp.classList.add("hidden2");
});
