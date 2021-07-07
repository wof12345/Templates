let portfolios;
let portfolioImages;
let articles;
let smalldesc;
let buttons;
let screenWidth;
let elmtoreset;

let animationParams = {
    param1: "",
    param2: "-",
    param3: "",
    param4: "",
    param5: "",
    param6: "",
    param7: "",
    param8: "",
};

function getelements() {
    portfolios = $(".port_container-inner");
    portfolioImages = $(".port_img");
    articles = $(".article");
    smalldesc = $(".smallDesc");
    buttons = $(".view");
    // console.log(portfolios);
}

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
    screenWidth = getWidth();
    console.log(screenWidth);
    if (screenWidth < 800) resetElms();
    // console.log(screenWidth);
}

function getValues() {
    if (screenWidth > 800) {
        animationParams.param1 = "70%";
        animationParams.param2 = "-600px";
        animationParams.param3 = "0px";
        animationParams.param4 = "1";
        animationParams.param5 = "0px";
        animationParams.param6 = "0px";
        animationParams.param7 = "252.59px";
        animationParams.param8 = "0";
    } else {
        animationParams.param1 = "0px";
        animationParams.param2 = "0px";
        animationParams.param3 = "null";
        animationParams.param5 = null;
        animationParams.param6 = "null";
        animationParams.param7 = "252.59px";

        animationParams.param4 = "1";
        animationParams.param8 = "0";
    }
}

function portfolioHoverAction(
    index,
    imgmrgin,
    smalldescmrgin,
    smalldescwidth,
    articleop
) {
    $(portfolioImages[index]).animate({ marginLeft: imgmrgin });
    $(smalldesc[index]).animate({
        marginTop: smalldescmrgin,
        width: smalldescwidth,
    });
    $(articles[index]).animate({ opacity: articleop });
}

function resetElms() {
    console.log(elmtoreset);
    portfolioHoverAction(elmtoreset, "0px", "0px", "252.59px", "0");
    elmtoreset = null;
}

function changeelements(elm) {
    $(elm).each(function(index, element) {
        // console.log(index);
        $(element).mouseenter(function() {
            getValues();
            portfolioHoverAction(
                index,
                animationParams.param1,
                animationParams.param2,
                animationParams.param3,
                animationParams.param4
            );
            elmtoreset = index;
        });

        $(element).mouseleave(function() {
            getValues();
            portfolioHoverAction(
                index,
                animationParams.param5,
                animationParams.param6,
                animationParams.param7,
                animationParams.param8
            );
            elmtoreset = index;
        });
    });
}

getelements();
getScreenwidth();

$(document).ready(function() {
    changeelements(portfolios);
});
window.addEventListener("resize", getScreenwidth);