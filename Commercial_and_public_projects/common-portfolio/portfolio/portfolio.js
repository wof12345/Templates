page.eteredPort = true;

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
    portfolio.portfolios = $(".port_container-inner");
    portfolio.portfolioImages = $(".port_img");
    portfolio.articles = $(".article");
    portfolio.smalldesc = $(".smallDesc");
    portfolio.buttons = $(".view");
    // console.log(portfolios);
}

function chnageForm() {
    // console.log(portfolio.elmtoreset);
    if (portfolio.elmtoreset !== null) resetElms();
}

function getValues() {
    if (page.screenWidth > 800) {
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
    $(portfolio.portfolioImages[index]).animate({ marginLeft: imgmrgin });
    $(portfolio.smalldesc[index]).animate({
        marginTop: smalldescmrgin,
        width: smalldescwidth,
    });
    $(portfolio.articles[index]).animate({ opacity: articleop });
}

function resetElms() {
    portfolioHoverAction(portfolio.elmtoreset, "0px", "0px", "252.59px", "0");
    portfolio.elmtoreset = null;
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
            portfolio.elmtoreset = index;
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
            portfolio.elmtoreset = index;
        });
    });
}

getelements();
getScreenwidth();

$(document).ready(function() {
    changeelements(portfolio.portfolios);
});