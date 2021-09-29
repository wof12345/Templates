let mainContainer = document.querySelector(`.main_container`);
let animation_text_container = document.querySelector(`.header_animated_text `)
let registerBtn = document.querySelector(`.register`);
let register_login_btn = document.querySelector(`.register_login`);
let registerBtnImg = document.querySelector(`.btn_img`);
let loginBtnImg = document.querySelector(`.btn_img_register`);
let siginCont = document.querySelector(`.inner_query_container`);
let registerCont = document.querySelector(`.inner_query_container--register`)
let forgot_pass_cont = document.querySelector(`.forgot_password`)
let calender = document.querySelector(`#select_birthdate`);

let logic = {
    pagefold: 1,
}

function generalAnimation(elements, animations) {
    elements.forEach((element, ind) => {
        element.style = animations[ind];
    });
}

function foldPage() {
    if (logic.pagefold === 1) {
        generalAnimation([siginCont, registerCont, animation_text_container, forgot_pass_cont], ['transform:translateX(-500px);max-height: 320px;', 'transform:translateX(-500px);max-height: 320px;', 'min-height: 100px;', 'display:none'])
        logic.pagefold = 2;
    } else {
        generalAnimation([siginCont, registerCont, animation_text_container, forgot_pass_cont], ['transform:translateX(0px);max-height: 170px;', 'transform:translateX(500px);max-height: 170px;', 'min-height: 200px;', 'display:block'])
        logic.pagefold = 1;
    }
}

mainContainer.addEventListener('click', function(e) {
    console.log(e.target);
    let targetClass = e.target.className;
    console.log(targetClass);


    if (targetClass === "register") {
        foldPage();
    }

    if (targetClass === "register_login") {
        foldPage();
    }

})

registerBtn.addEventListener('mouseover', () => {
    generalAnimation([registerBtnImg], ['width:16px ;  transform: translateX(4px);'])
})

registerBtn.addEventListener('mouseout', () => {
    generalAnimation([registerBtnImg], ['width:0px ;  transform: translateX(200px);'])
})

register_login_btn.addEventListener('mouseover', () => {
    generalAnimation([loginBtnImg], ['width:16px ;  transform: translateX(-6px);'])
})

register_login_btn.addEventListener('mouseout', () => {
    generalAnimation([loginBtnImg], ['width:0px ;  transform: translateX(-200px);'])
})

$('#select_birthdate').datepicker({
    showOn: "button",
    buttonImage: "calendar.svg",
    buttonImageOnly: true,
    buttonText: "",
    showAnim: "slideDown",
    changeYear: true,
    yearRange: "1991:2020",
    dateFormat: "dd-mm-yy"
});