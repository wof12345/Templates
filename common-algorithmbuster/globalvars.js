let iteraionBlock = {
    block: function(iterationNo, information1, information2, information3, information4) {
        return ` <div class="iteration_result">
        <p>${iterationNo}</p>
        <p>${information1}</p>
        <p>${information2}</p>
        <p>${information3}</p>
        <p>${information4}</p>
    </div>`
    }
}

let lastTimerValue = 0;

let pageElements = {
    choice: document.getElementById('choice'),
    infoBox: document.querySelector(`.selection_info`),
    resultDisplay: document.querySelector(`.result_display`),
    floater: document.querySelector(`.floating_window`),
    floater_text: document.querySelector(`.text_floater`),
    display_toggle: document.querySelector(`.display_toggle`),
    input_box: document.querySelector(`#input_gen`),
    generationButton: document.querySelector(`.generate`),
}

let backupVariables = {
    iterationShown: false,
    globalteration: 1,
    lastTime: 0,
}

let lastIterationQueries = {
    iterations: [],
}

let chartData = {
    algo1: [0],
    algo2: [0],
    algo3: [0],
    algo4: [0],
    algo5: [0],
    algo6: [0],
    algo7: [0],
    algo8: [0],
    algo9: [0],
    algo1labels: [0],
    algo2labels: [0],
    algo3labels: [0],
    algo4labels: [0],
    algo5labels: [0],
    algo6labels: [0],
    algo7labels: [0],
    algo8labels: [0],
    algo9labels: [0],
}

let chartCurrentData = {
    labels: [],
    data: []
}

let graph_cont = document.getElementById('graph_cont').getContext('2d');

let currentGraphInfo = {
    graphName: null,
    nodes: 0,
    edges: 0,
    source: 0,
    target: 0,
    visitState: [],
    currentArrayState: [],
    graphRelations: [],
    cycles: 0,
    tsSortstartTime: [],
    tsSortendTime: [],
    timeVar: 1,
    iterationSerial: [],
    weights: [],
    priorityQueue: new PriorityQueue(),
}