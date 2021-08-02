// export { getWidth };

if(!localStorage.getItem("Client_info")) {
    try {
        $.getJSON("https://api.db-ip.com/v2/free/self", function(data, status) {
            if(status === "success") {
                if(!data.error) {
                    localStorage.setItem("Client_info", JSON.stringify(data));
                    global_info.client_data = data;
                } else {
                    throw new Error("Error occurred! " + data.error);
                }
            } else {
                throw new Error("Error occurred! " + status);
            }
        });
    } catch(e) {
        console.log(e);
    }
} else {
    global_info.client_data = JSON.parse(localStorage.getItem("Client_info"));
}

function updateAdmin() {

    // console.log(admininfoDB);
    if(
        admininfoDB.continentCode === global_info.client_data.continentCode &&
        admininfoDB.city === global_info.client_data.city &&
        admininfoDB.continentName === global_info.client_data.continentName
    ) {
        login.loginMsg.style.display = "none";
        login.loginpass.style.display = 'block'
    } else {
        login.loginMsg.style.display = "block";
        login.loginpass.style.display = 'none'
    }
}
setTimeout(updateAdmin, 500);
// console.log(global_info.client_data);

// let req = window.indexedDB.open();
// console.log(req);

function getWidth() {
    if(self.innerWidth) {
        return self.innerWidth;
    }

    if(document.documentElement && document.documentElement.clientWidth) {
        return document.documentElement.clientWidth;
    }

    if(document.body) {
        return document.body.clientWidth;
    }
}

function getScreenwidth() {
    page.screenWidth = getWidth();
    if(page.eteredPort) {
        chnageForm();
    }
    page.lastScreenWidth = page.screenWidth;
}

function toggleLogin(event, opacity, bool, pic) {
    if(pic[1]) {
        login.admin_pic.style = ` width: ${pic[0]}px;
    margin: ${10}px;`
    } else {
        login.admin_pic.style = ``
    }
    login.loginPanel.style = `pointer-events:${event}; opacity:${opacity};`;
    login.isopen = bool;
}

login.admin_pic.addEventListener("click", () => {
    if(!login.isopen) {
        toggleLogin("all", 1, true, [50, true]);
    } else {
        toggleLogin("none", 0, false, [60, false]);
    }
});

document.addEventListener("click", (e) => {
    // console.log(e.target);
    if(!e.target.closest(".admin_login") && e.target !== login.admin_pic) {
        if(login.isopen) {
            toggleLogin("none", 0, false, [60, false]);
        }
    }
});

window.addEventListener("resize", getScreenwidth);