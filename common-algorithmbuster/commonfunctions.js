function clear() {
    let children = pageElements.resultDisplay;
    while (children.childElementCount) {
        children.removeChild(children.firstElementChild)
    }
}

function numberify(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = +array[i];
    }
    return array;
}

function timer(command) {
    if (command === `start`) {
        let dateob = new Date().getMilliseconds();
        lastTimerValue = dateob;
    }

    if (command === `stop`) {
        let dateob = new Date().getMilliseconds();
        return Math.abs(dateob - lastTimerValue) / 1000;
    }
}

function setInfo(info) {
    pageElements.infoBox.innerHTML = info;
}

function iterationView(iterationNumber, information1, changes, currentInputState, originalInput) {
    pageElements.resultDisplay.insertAdjacentHTML('beforeend', iteraionBlock.block(iterationNumber, information1, changes, currentInputState, originalInput))
}

function deflate_floater() {
    pageElements.floater.style = `left:-400px;top:0;`;
}

function invoke_floater(style, text, duration) {
    pageElements.floater.style = style;
    pageElements.floater_text.textContent = text;

    if (duration < 2000) {
        setTimeout(() => {
            deflate_floater();
        }, duration);
    }
}