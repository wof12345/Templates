let page = {
    screenWidth: "",
    lastScreenWidth: "",
    eteredPort: false,
};

let admininfoDB = {
    name: '',
    city: "",
    continentCode: "",
    continentName: "",
    pass: ''
}

let index = {
    showcase: document.querySelectorAll(`.section`)
}

let login = {
    admin_pic: document.querySelector(`.picture1`),
    loginPanel: document.querySelector(`.admin_login`),
    loginMsg: document.querySelector(`.message`),
    loginpass: document.querySelector(`.login_panel`),
    isopen: false,
};

let admininfo = {
    loggedin: false,
};

// console.log(login.admin_pic);

let portfolio = {
    portfolios: "",
    portfolioImages: "",
    smalldesc: "",
    buttons: "",
    screenWidth: "",
    elmtoreset: "",
};

let global_info = {
    client_data: "",
};