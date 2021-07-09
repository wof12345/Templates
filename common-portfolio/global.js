if (!localStorage.getItem("Client_info")) {
    try {
        $.getJSON("https://api.db-ip.com/v2/free/self", function(data, status) {
            if (status === "success") {
                if (!data.error) {
                    localStorage.setItem("Client_info", JSON.stringify(data));
                    global_info.client_data = data;
                } else {
                    throw new Error("Error occurred! " + data.error);
                }
            } else {
                throw new Error("Error occurred! " + status);
            }
        });
    } catch (e) {
        console.log(e);
    }
} else {
    global_info.client_data = JSON.parse(localStorage.getItem("Client_info"));
}

if (
    admininfo.IP === global_info.client_data.ipAddress &&
    admininfo.city === global_info.client_data.city
) {
    login.loginMsg.style.display = "none";
} else {
    login.loginMsg.style.display = "block";
}
// console.log(global_info.client_data);

// let req = window.indexedDB.open();
// console.log(req);

function getWidth() {
    if (self.innerWidth) {
        return self.innerWidth;
    }

    if (document.documentElement && document.documentElement.clientWidth) {
        return document.documentElement.clientWidth;
    }

    if (document.body) {
        return document.body.clientWidth;
    }
}

function getScreenwidth() {
    page.screenWidth = getWidth();
    if (page.eteredPort) {
        chnageForm();
    }
    page.lastScreenWidth = page.screenWidth;
}

function toggleLogin(event, opacity, bool) {
    login.loginPanel.style = `pointer-events:${event}; opacity:${opacity};`;
    login.isopen = bool;
}

login.admin_pic.addEventListener("click", () => {
    if (!login.isopen) {
        toggleLogin("all", 1, true);
    } else {
        toggleLogin("none", 0, false);
    }
});

document.addEventListener("click", (e) => {
    // console.log(e.target);
    if (!e.target.closest(".admin_login") && e.target !== login.admin_pic) {
        if (login.isopen) {
            toggleLogin("none", 0, false);
        }
    }
});

window.addEventListener("resize", getScreenwidth);