let portfolios;
let portfolioImages;
let articles;
let smalldesc;
let buttons;
let screenWidth;

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

function getScreenwidth() {
    screenWidth = $(document).width();
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
        animationParams.param1 =
            animationParams.param2 =
            animationParams.param3 =
            animationParams.param5 =
            animationParams.param6 =
            animationParams.param7 =
            "null";
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
        });
    });
}

getelements();
getScreenwidth();

$(document).ready(function() {
    changeelements(portfolios);
});

window.addEventListener("resize", getScreenwidth);