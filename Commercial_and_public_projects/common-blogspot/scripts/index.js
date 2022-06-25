let mainContainer = document.querySelector(`.main_container_sr`);
let header = document.querySelector(".header");
let subtitle = document.querySelector(`.subtitle`);
let animation_text_container = document.querySelector(`.header_animated_text `);
let registerBtn = document.querySelector(`.register`);
let register_login_btn = document.querySelector(`.register_login`);
let registerBtnImg = document.querySelector(`.btn_img`);
let loginBtnImg = document.querySelector(`.btn_img_register`);
let siginCont = document.querySelector(`.inner_query_container`);
let registerCont = document.querySelector(`.inner_query_container--register`);
let forgot_pass_cont = document.querySelector(`.forgot_password`);
let calender = document.querySelector(`#select_birthdate`);
let before = document.querySelector(`.before`);
let after = document.querySelector(`.after`);

let logic = {
  pagefold: 1,
};

function generalAnimation(elements, animations) {
  elements.forEach((element, ind) => {
    element.style = animations[ind];
  });
}

function resetAnimation() {
  let left = window.getComputedStyle(before, null).getPropertyValue("left");
  // console.log(left);

  if (left === "262.516px") {
    before.style = `animation: none;left:0;`;
    after.style = `animation:none;left:0;`;

    setTimeout(() => {
      before.style = `animation: var(--typewriter_before);left:0;`;
      after.style = `animation: var(--typewriter_animation);left:0;`;
    }, 200);
  }
}

function foldPage() {
  if (logic.pagefold === 1) {
    generalAnimation(
      [siginCont, registerCont, animation_text_container, forgot_pass_cont],
      [
        "transform:translateX(-500px);",
        "transform:translateX(0px);max-height: 320px;",
        "min-height: 100px;",
        "display:none",
      ]
    );
    setTimeout(() => {
      generalAnimation([siginCont], ["display:none"]);
    }, 500);
    logic.pagefold = 2;
    subtitle.textContent = "Please register to continue >";
    resetAnimation();
  } else {
    generalAnimation(
      [siginCont, registerCont, animation_text_container, forgot_pass_cont],
      [
        "transform:translateX(-500px);max-height: 170px;",
        "transform:translateX(-400px);",
        "min-height: 200px;",
        "display:block",
      ]
    );
    setTimeout(() => {
      generalAnimation(
        [siginCont, registerCont],
        [
          "transform:translateX(0px);",
          "transform:translateX(500px);max-height: 170px;",
        ]
      );
    }, 400);
    logic.pagefold = 1;
    subtitle.textContent = "Please login to continue >";
    resetAnimation();
  }
}

mainContainer.addEventListener("click", function (e) {
  // console.log(e.target);
  let targetClass = e.target.className;
  // console.log(targetClass);

  if (targetClass === "register") {
    foldPage();
  }

  if (targetClass === "register_login") {
    foldPage();
  }
});

registerBtn.addEventListener("mouseover", () => {
  generalAnimation(
    [registerBtnImg],
    ["width:16px ;  transform: translateX(4px);"]
  );
});

registerBtn.addEventListener("mouseout", () => {
  generalAnimation(
    [registerBtnImg],
    ["width:0px ;  transform: translateX(200px);"]
  );
});

register_login_btn.addEventListener("mouseover", () => {
  generalAnimation(
    [loginBtnImg],
    ["width:16px ;  transform: translateX(-6px);"]
  );
});

register_login_btn.addEventListener("mouseout", () => {
  generalAnimation(
    [loginBtnImg],
    ["width:0px ;  transform: translateX(-200px);"]
  );
});

$("#select_birthdate").datepicker({
  showOn: "button",
  buttonImage: "./images/calendar.svg",
  buttonImageOnly: true,
  buttonText: "",
  showAnim: "slideDown",
  changeYear: true,
  yearRange: "1991:2020",
  dateFormat: "dd-mm-yy",
});
