let upperCont = {
    button: document.querySelector(`.create_form`),
    arrowcont: document.getElementById(`toanimate_cont`),
    arrows: document.querySelectorAll(`.toanimate`),
    animated: false,
}

let pageCommon = {
    button: document.querySelectorAll(`.common_btn`),
    buttonback: document.querySelectorAll(`.common_btn_back`),
    wrapper: document.querySelectorAll(`.wrapper`)
}

let containerProp = {
    frameCount: 0,
    currentContainer: '',
    animationparams: [],
    sibblinganimeparam: [],
    lastSibbling: [],
    interval: null,
    nextCont: '',
    activeLayer: 1,
    layerValues: [20, 40, 60]
}

let globalClicks = {
    back: 0,
}

function setProps(animationparams, container, frameCount, interval, nextCont, sibblinganimeparam) {
    containerProp.animationparams = animationparams;
    containerProp.currentContainer = container;
    containerProp.frameCount = frameCount;
    containerProp.interval = interval;
    containerProp.nextCont = nextCont;
    containerProp.sibblinganimeparam = sibblinganimeparam;
}

function animateCommon(params, style) {
    params.forEach((elm, ind) => {
        elm.style = style[ind]
    })
}

function animate() {
    if(containerProp.frameCount !== containerProp.animationparams.length) {
        containerProp.currentContainer.style = containerProp.animationparams[containerProp.frameCount];
        containerProp.frameCount++;
    } else {
        clearInterval(containerProp.interval)
        setProps('', '', 0, null, containerProp.nextCont, containerProp.sibblinganimeparam);
        // console.log(containerProp);   
        if(containerProp.nextCont !== '' && containerProp.nextCont !== null)
            animateContainer(containerProp.nextCont, '', containerProp.sibblinganimeparam)
    }

}

function animateContainer(container, nextCont, animationparams, sibblinganimeparam) {
    setProps(animationparams, container, 0, '', nextCont, sibblinganimeparam);
    containerProp.interval = setInterval(animate, 500);
}

function arrowcont_animateseq1() {
    animateCommon([upperCont.arrowcont, upperCont.button, upperCont.animated, upperCont.arrows[0], upperCont.arrows[1]], [`transform:translateX(30px)`, `padding-right:50px`, !upperCont.animated, ` transform: rotate(28deg);opacity:1`, ` transform: rotate(-28deg);opacity:1`])
}

function arrowcont_animateseq2() {
    animateCommon([upperCont.arrowcont, upperCont.button, upperCont.animated, upperCont.arrows[0], upperCont.arrows[1]], ["", !upperCont.animated])
}

upperCont.button.addEventListener('mouseover', arrowcont_animateseq1);
upperCont.button.addEventListener('mouseout', arrowcont_animateseq2);

pageCommon.button.forEach(elm => {
    elm.addEventListener('click', (e) => {
        let closestCont = elm.closest('section')
        let nextCont = closestCont.nextElementSibling;

        containerProp.lastSibbling.push(closestCont);
        if(containerProp.activeLayer < 4) {
            containerProp.activeLayer++;
        }


        setTimeout(() => {
            (pageCommon.wrapper[containerProp.activeLayer - 2]).style.opacity = "1";
        }, 2000)

        animateContainer(closestCont, nextCont, ['transform:translateX(200px)', 'transform:translateX(-120%)'], ["margin: 40px 60px 130px;"]);
    })
})

pageCommon.buttonback.forEach(elm => {
    elm.addEventListener('click', (e) => {
        let closestCont = elm.closest('section')
        let index = containerProp.activeLayer - 2;
        let uppersibbling = containerProp.lastSibbling[index];
        let layerValue = containerProp.layerValues[index]

        if(containerProp.activeLayer !== 0) {
            containerProp.activeLayer--;
        }

        setTimeout(() => {
            (pageCommon.wrapper[containerProp.activeLayer - 1]).style = "";
        }, 1000)
        animateContainer(closestCont, uppersibbling, [` margin: ${40+layerValue}px ${60+layerValue}px ${130-layerValue}px`], ['transform:translateX(.05%)', "margin: 40px 60px 130px;"]);
        containerProp.lastSibbling.pop();
    })
})