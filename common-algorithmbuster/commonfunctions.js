function generateRandomNumber(range) {
    return (Math.random() * range).toFixed(1);
}

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
        console.log(dateob, lastTimerValue);

    }

    if (command === `stop`) {
        let dateob = new Date().getMilliseconds();
        console.log(dateob, dateob - lastTimerValue);
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

function updateChartNecessity(title) {
    myChart.options.plugins.title.text = '' + title;
    myChart.update();
}

function assignTemp(givenData, givenLabels) {
    givenData.forEach((elm, ind) => {
        chartCurrentData.data.push(elm);
        chartCurrentData.labels.push(givenLabels[ind])
    })
}

function emptyCurrentStorageSafe() {
    for (let it = 0; it < chartCurrentData.data.length + 1; it++) {
        // console.log(!isNaN(chartCurrentData.data[it]), chartCurrentData.data[it]);
        if (!isNaN(chartCurrentData.data[it])) {
            chartCurrentData.data.splice(it, 1);
            chartCurrentData.labels.splice(it, 1);
            it--;
        }
    }
}


function updateGraph(algorithm, label, time) {
    if (algorithm === 'Selection-sort') {
        // console.log(algorithm, label, time);

        chartData.algo1.push(time);
        chartData.algo1labels.push(label);

        assignTemp(chartData.algo1, chartData.algo1labels);
        // console.log(chartCurrentData.labels, chartCurrentData.data);

        updateChartNecessity(algorithm);
    } else if (algorithm === 'Merge-sort') {
        // console.log(algorithm, label, time);

        chartData.algo2.push(time);
        chartData.algo2labels.push(label);

        assignTemp(chartData.algo2, chartData.algo2labels);
        // console.log(chartCurrentData.labels, chartCurrentData.data);

        updateChartNecessity(algorithm);
    } else if (algorithm === 'Bubble-sort') {
        // console.log(algorithm, label, time);

        chartData.algo3.push(time);
        chartData.algo3labels.push(label);

        assignTemp(chartData.algo3, chartData.algo3labels);
        // console.log(chartCurrentData.labels, chartCurrentData.data);

        updateChartNecessity(algorithm);
    } else if (algorithm === 'Quick-sort') {
        // console.log(algorithm, label, time);

        chartData.algo4.push(time);
        chartData.algo4labels.push(label);

        assignTemp(chartData.algo4, chartData.algo4labels);
        // console.log(chartCurrentData.labels, chartCurrentData.data);

        updateChartNecessity(algorithm);
    } else if (algorithm === 'Heap-sort') {
        // console.log(algorithm, label, time);

        chartData.algo5.push(time);
        chartData.algo5labels.push(label);

        assignTemp(chartData.algo5, chartData.algo5labels);
        // console.log(chartCurrentData.labels, chartCurrentData.data);

        updateChartNecessity(algorithm);
    } else if (algorithm === 'Insertion-sort') {
        // console.log(algorithm, label, time);

        chartData.algo6.push(time);
        chartData.algo6labels.push(label);

        assignTemp(chartData.algo6, chartData.algo6labels);
        // console.log(chartCurrentData.labels, chartCurrentData.data);

        updateChartNecessity(algorithm);
    }

    emptyCurrentStorageSafe();
    // console.log(chartCurrentData.labels, chartCurrentData.data);
}