//get classes
const showcase_here = document.querySelector(
  ".main_body--showcase-logo-main--main"
);
const checker = document.querySelectorAll(".box");
const navTable = document.querySelector(".head_headernav--table");
const tablebar = document.querySelector(".table-bar");
const navelem = document.querySelectorAll(".gt");
const headernav = document.querySelectorAll(".head_headernav--nav");
const headernavmain = document.querySelector(".head_headernav");
//important variables
let universaltimer = 0;
let lim;
let isopen = false;
let issmall;

//functions
window.addEventListener("scroll", function () {
  var scroll = window.scrollY;
  if (scroll > 0) {
    for (const cur of navelem) {
      cur.classList.add("hidden");
      headernavmain.style = "box-shadow:2px 2px 2px 2px #9696993b";
    }
  } else
    for (const cur of navelem) {
      cur.classList.remove("hidden");
      headernavmain.style = "box-shadow:none";
    }
});
//table-bar
navTable.addEventListener("click", function () {
  if (!isopen) {
    tablebar.classList.add("transition");

    tablebar.classList.remove("hidden1");
    isopen = true;
  } else {
    tablebar.classList.remove("transition");
    tablebar.classList.add("hidden1");
    isopen = false;
  }
});

//set bg
function setbg(add, remove) {
  checker[add]?.classList.add(`bg`);
  checker[remove]?.classList.remove(`bg`);
}

//clickevent
for (const [i, cur] of checker.entries()) {
  cur.addEventListener("click", function () {
    if (universaltimer !== i) {
      if (i === 0 && universaltimer === 1) {
        showcase_here.classList.remove(`push0`);
        setbg(i, universaltimer);
      }
      if (i === 0 && universaltimer === 2) {
        showcase_here.classList.remove(`push0`);
        showcase_here.classList.remove(`push1`);
        setbg(i, universaltimer);
      }
      if (i === 0 && universaltimer === 3) {
        showcase_here.classList.remove(`push0`);
        showcase_here.classList.remove(`push1`);
        showcase_here.classList.remove(`push2`);
        setbg(i, universaltimer);
      }
      if (i === 1 && universaltimer === 0) {
        showcase_here.classList.add(`push0`);
        setbg(i, universaltimer);
      }
      if (i === 1 && universaltimer === 2) {
        showcase_here.classList.remove(`push1`);
        setbg(i, universaltimer);
      }
      if (i === 1 && universaltimer === 3) {
        showcase_here.classList.remove(`push1`);
        showcase_here.classList.remove(`push2`);
        setbg(i, universaltimer);
      }
      if (i === 2 && universaltimer === 0) {
        showcase_here.classList.add(`push0`);
        showcase_here.classList.add(`push1`);
        setbg(i, universaltimer);
      }
      if (i === 2 && universaltimer === 1) {
        showcase_here.classList.add(`push1`);
        setbg(i, universaltimer);
      }
      if (i === 2 && universaltimer === 3) {
        showcase_here.classList.add(`push2`);
        setbg(i, universaltimer);
      }
      if (i === 3 && universaltimer === 2) {
        showcase_here.classList.add(`push2`);
        setbg(i, universaltimer);
      }
      if (i === 3 && universaltimer === 1) {
        showcase_here.classList.add(`push1`);
        showcase_here.classList.add(`push2`);
        setbg(i, universaltimer);
      }
      if (i === 3 && universaltimer === 0) {
        showcase_here.classList.add(`push0`);
        showcase_here.classList.add(`push1`);
        showcase_here.classList.add(`push2`);
        setbg(i, universaltimer);
      }
    }
    universaltimer = i;
  });
}
issmall = headernav[0].classList.contains("navor");
//slide
if (window.screen.width > 1080) {
  lim = 2;
} else lim = 3;
setInterval(function () {
  if (window.screen.width > 1080) {
    lim = 2;
  } else {
    lim = 3;
    for (const cur of navelem) {
      cur.classList.add("hidden");
    }
  }
  if (lim > 2) {
    checker[3].classList.remove("hidden");
  } else {
    checker[3].classList.add("hidden");
  }
  showcase_here.classList.add(`push${universaltimer}`);
  checker[universaltimer + 1]?.classList.add(`bg`);
  checker[universaltimer]?.classList.remove(`bg`);
  universaltimer++;
  if (universaltimer > lim) {
    universaltimer = 0;
    checker[universaltimer]?.classList.add(`bg`);
    showcase_here.classList.remove(`push1`);
    showcase_here.classList.remove(`push0`);
    showcase_here.classList.remove(`push2`);
    showcase_here.classList.remove(`push3`);
  }
}, 3000);
