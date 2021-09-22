function clear() {
    deflate_floater();
    backupVariables.globalteration = 1;
    lastIterationQueries.iterations = [];
    clearDisplay();
    iteration_toggle('hide')
}

function clearDisplay() {
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

function iterationPush(iterationNumber, information1, changes, currentInputState, originalInput) {
    lastIterationQueries.iterations.push(iteraionBlock.block(iterationNumber, information1, changes, currentInputState, originalInput))
}

function iterationView(collection) {
    // console.log('works', collection.length);
    if (collection.length <= 0) pageElements.resultDisplay.insertAdjacentHTML('beforeend', `<p>Nothing</p>`);
    else {
        clearDisplay();
        for (let it = 0; it < collection.length; it++) {
            pageElements.resultDisplay.insertAdjacentHTML('beforeend', collection[it]);
        }
    }
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

function iteration_toggle(command) {
    if (command === "show") {
        backupVariables.iterationShown = !backupVariables.iterationShown;
        iterationView(lastIterationQueries.iterations);
        pageElements.display_toggle.style = '  background-color: rgba(174, 203, 228, 0.514);';
    } else {
        backupVariables.iterationShown = !backupVariables.iterationShown;
        clearDisplay();
        pageElements.display_toggle.style = '';
    }
}