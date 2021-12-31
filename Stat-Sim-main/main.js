let prgrsbar_full = [];
let fieldCount = 0;
let mainInter;
let isup = false;
let isopen = false;
let uniind = 0;
let signhold = [];
//dom
let mainCont = document.querySelector(".MainCont");
let prgrsbar = document.querySelectorAll(".PrgressB");
let prgress = document.querySelectorAll(".Prgrss");
let prgressT = document.querySelectorAll(".prgrssT");
let btntool = document.querySelectorAll(".tt");
let propBtn = document.querySelector(".StatSet");
let botslider = document.querySelector(".botslider");
let fieldinp = document.getElementById("inp1");
let inplimit = document.querySelectorAll(".fullinp_inner");
let viewinpfull = document.querySelectorAll(".view_inpfull");
let inpfullsubbtn = document.querySelectorAll(".submit1");
let modwincont = document.querySelector(".modwinCont");
let modwin = document.querySelector(".modwin");
let modwincont1 = document.querySelector(".modwinCont1");
let modwin1 = document.querySelector(".modwin1");
let outercontI = document.querySelectorAll(".outercontI");
let actualcontI = [];
let pointcontCont = [];
let addpoint = document.querySelectorAll(".addpoint");
let addpointr = document.querySelectorAll(".addpointr");
let addpointo = document.querySelectorAll(".addpointo");
let pointinp = document.querySelectorAll(".pointinp");
let viewfullinp = document.querySelector(".viewfullinp");

function refetch() {
    mainCont = document.querySelector(".MainCont");
    prgrsbar = document.querySelectorAll(".PrgressB");
    prgress = document.querySelectorAll(".Prgrss");
    prgressT = document.querySelectorAll(".prgrssT");
    inplimit = document.querySelectorAll(".fullinp_inner");
    inpfullsubbtn = document.querySelectorAll(".submit1");
    viewinpfull = document.querySelectorAll(".view_inpfull");
    modwin = document.querySelector(".modwin");
    outercontI = document.querySelectorAll(".outercontI");
    addpoint = document.querySelectorAll(".addpoint");
    addpointr = document.querySelectorAll(".addpointr");
    addpointo = document.querySelectorAll(".addpointo");
    pointinp = document.querySelectorAll(".pointinp");
    fieldCount = 0;
    // console.log(pointinp.length);
}

propBtn.addEventListener("click", () => {
    if (!isup) {
        botslider.style.width = "30%";
        propBtn.textContent = "Close";
        isup = true;
    } else {
        minorFunc1();
    }
});

let randC = function() {
    return Math.floor(Math.random() * 100) + 1;
};

let prcnt = function(done, full) {
    return Math.floor((done * 100) / full);
};

let ultimateJustifier = function() {
    let mark = true;
    prgressT.forEach((element, index) => {
        if (!signhold[index]) {
            mark = false;
        }
    });
    return mark;
};

function cutInt() {
    clearInterval(mainInter);
    minorFunc(0);
}

function setInt() {
    clearInterval(mainInter);
    mainInter = setInterval(initiate, 800);
    minorFunc(1);
    pregen();
}

function resetInt() {
    clearInterval(mainInter);
    mainInter = setInterval(initiate, 200);
    minorFunc(2);
    pregen();
}

function resetInt0() {
    uniind = 0;
    prgrsbar.forEach((elm, ind) => {
        prgress[ind].style.width = `${prcnt(0, prgrsbar_full[ind])}%`;
        prgressT[ind].style = "padding-right:0;transition:.5s";
        viewinpfull[ind].classList.remove("Eclass1");
        prgressT[ind].textContent = "0";
        signhold[ind] = false;
    });
    cutInt();
}

function minorFunc(atthat) {
    btntool[atthat].classList.add("Eclass");
    btntool.forEach((element, index) => {
        if (index != atthat) element.classList.remove("Eclass");
    });
}

function minorFunc1() {
    botslider.style.width = "0";
    propBtn.textContent = "Properties";
    isup = false;
}

function openmod() {
    modwincont.style = `display:flex;flex-direction:column`;
}

function openmod1() {
    modwincont1.style = `display:flex;flex-direction:column`;
}

function closemod() {
    modwincont.style = `display:none`;
}

function closemod1() {
    modwincont1.style = `display:none`;
}

function affirmmod() {
    modwincont.style = `display:none`;
    inplimit.forEach((element, ind) => {
        viewinpfull[ind].textContent = element.value;
    });
    pregen();
}

function affirmmod1() {
    actualcontI.forEach((elm, ind) => {
        for (let index = 1; index < elm.childNodes.length; index++) {
            pointcontCont[ind][index - 1] = elm.childNodes[index].value;
            // console.log(pointcontCont[ind][index - 1]);
        }
        // console.log(pointcontCont[ind]);
    });
}

function setall() {
    inplimit.forEach((element, ind) => {
        element.value = viewfullinp.value;
        viewinpfull[ind].textContent = viewfullinp.value;
    });
}

function addtoall() {
    actualcontI.forEach((elm, ind) => {
        actualcontI[
            ind
        ].innerHTML += `<input type="text" name="" class="pointinp" value='0' />`;
        if (pointcontCont[0][0] !== undefined) {
            for (let index = 1; index < actualcontI[ind].childNodes.length; index++) {
                actualcontI[ind].childNodes[index].value = [
                    pointcontCont[ind][index - 1] == undefined ?
                    0 :
                    pointcontCont[ind][index - 1],
                ];
            }
        }
    });
}

function invokenew() {
    let innnercont = document.querySelectorAll(".InnerCont");
    let innerCont1 = document.querySelectorAll(".innerInput1");
    innnercont.forEach((element, ind) => {
        element.remove();
    });

    innerCont1.forEach((element, ind) => {
        element.remove();
    });

    outercontI.forEach((element, ind) => {
        element.remove();
    });

    fieldCount = Number.parseInt(fieldinp.value);
    generateLast();
    uniind = 0;
    // console.log(fieldCount);
}

let pregen = function() {
    prgrsbar.forEach((element, index) => {
        prgrsbar_full[index] = Number.parseInt(inplimit[index].value);
        // console.log(prgrsbar_full[index]);
    });
};

let endQuery = function(index) {
    prgressT[index].style = "padding-right:100%;transition:.5s";
    viewinpfull[index].classList.add("Eclass1");
};

let generateLast = function() {
    for (let index = 0; index < fieldCount; index++) {
        mainCont.innerHTML += `<div class="InnerCont">
        <input type="text" name="" class="TextSide" value="Example" />
    <div class="PrgressB" style="min-width: 80%">
        <div class="Prgrss" style="width: 0px">
            <p class="prgrssT">0</p>
        </div>
        <div class="inpCont">
        <p class="view_inpfull">100</p>
    </div>
    </div>
</div>`;
    }

    for (let index = 0; index < fieldCount; index++) {
        modwin.innerHTML += `<div class="innerInput1 innerInput">
            <label for="fields">Field limit ${index + 1}:</label>
            <input class="fullinp_inner" type="text" name="" id=" ${index}" value="100" />
            <button class="submit1">Apply</button>
        </div>`;
    }

    for (let index = 0; index < fieldCount; index++) {
        modwin1.innerHTML += `  <div class="outercontI">
        <label for="">Field ${index + 1} Change-Points:</label>
        <div class="actualcontI${index} commoninmI">
        </div>
        <button class="addpoint button1">Add point</button>
        <button class="addpointr button1">Remove point</button>
        <button class="addpointo button1">Apply</button>
    </div>`;
    }
    refetch();

    outercontI.forEach((elm, ind) => {
        actualcontI[ind] = document.querySelector(`.actualcontI${ind}`);
        pointcontCont[ind] = [];
        signhold[ind] = false;
    });

    inpfullsubbtn.forEach((elm, ind) => {
        elm.addEventListener("click", () => {
            viewinpfull[ind].textContent = inplimit[ind].value;
        });
        pregen();
    });

    addpoint.forEach((elm, ind) => {
        elm.addEventListener("click", () => {
            actualcontI[
                ind
            ].innerHTML += `<input type="text" name="" class="pointinp" value='0' />`;
            for (let index = 1; index < actualcontI[ind].childNodes.length; index++) {
                actualcontI[ind].childNodes[index].value = [
                    pointcontCont[ind][index - 1] == undefined ?
                    0 :
                    pointcontCont[ind][index - 1],
                ];
            }
        });
        refetch();
    });

    addpointr.forEach((elm, ind) => {
        elm.addEventListener("click", () => {
            // console.log(actualcontI[ind].childNodes.length);
            actualcontI[ind].removeChild(
                actualcontI[ind].childNodes[actualcontI[ind].childNodes.length - 1]
            );
        });
    });

    addpointo.forEach((elm, ind) => {
        elm.addEventListener("click", () => {
            for (let index = 1; index < actualcontI[ind].childNodes.length; index++) {
                pointcontCont[ind][index - 1] =
                    actualcontI[ind].childNodes[index].value;
            }
        });
    });
};

let initiate = function() {
    refetch();
    prgrsbar.forEach((element, index) => {
        if (!signhold[index] && pointcontCont[index][uniind] !== undefined) {
            let temp = prgress[index].style.width + "";
            let prgressin = Number.parseInt(prgressT[index].textContent);
            prgressin = pointcontCont[index][uniind];
            // if (randC() > 5) {
            //     prgressin += 5;
            //     if (prgressin >= prgrsbar_full[index]) {
            //         prgressin = prgrsbar_full[index];
            //         endQuery(index);
            //     }
            // } else {
            //     if (prgressin != prgrsbar_full[index]) {
            //         prgressin -= 5;
            //     }
            //     if (prgressin < 0) prgressin = 0;
            // }
            prgress[index].style.width = `${prcnt(prgressin, prgrsbar_full[index])}%`;
            // console.log(prgressin);
            if (prgressin !== undefined) {
                prgressT[index].textContent = Number.parseInt(prgressin) + "";
            }
            if (uniind === pointcontCont[index].length - 1) {
                signhold[index] = true;
                endQuery(index);
            }
        }
    });
    if (ultimateJustifier()) {
        clearInterval(mainInter);
    }
    try {
        if (pointcontCont[0][0] !== undefined) uniind++;
    } catch (error) {
        // console.log(error);
    }
};