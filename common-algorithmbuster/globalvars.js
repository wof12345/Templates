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

let preDefinedText = {
    inputTextArray: 'Input for the algorithm (If array, elements should be seperated by ",". Note that iterations are not balanced :)',
    inputTextGraph: 'Input should be seperated by space and comma. E.g. (2 3,4 5,6 7). Note that first line only represents the number of nodes and edges. If there is no weight then the third input followed by space should be 0, Eliminating input should be a single  node denoting the source. If there is a target it should be followed by the source.',
    inputTextSearch: 'Input for the algorithm (If array, elements should be seperated by ",". The value to search should be denoted followed by a "," at the end. ',
    inputTextSingleInput: `Enter a single input: (Only the first few values according to the algorithm followed by any delimiters will be processed.)`,
    genTextArray: `Number of inputs to generate : <br>(number of inputs and input <br> range seperated by comma.<br>  e.g: (number of elements,range)<br>  (200,600))`,
    genTextGraph: `Graph to generate : <br>(number of Nodes and Edges <br> seperated by comma.<br>If weighted, third input should <br> be 1 else 0.<br>  e.g: (Nodes, Edges, hasweight)<br>  (10, 12, 0))`,
}

let lastTimerValue = 0;

let pageElements = {
    input: document.getElementById(`input`),
    choice: document.getElementById('choice'),
    infoBox: document.querySelector(`.selection_info`),
    resultDisplay: document.querySelector(`.result_display`),
    floater: document.querySelector(`.floating_window`),
    floater_text: document.querySelector(`.text_floater`),
    display_toggle: document.querySelector(`.display_toggle`),
    input_box: document.querySelector(`#input_gen`),
    generationButton: document.querySelector(`.generate`),
    input_gen_cont: document.querySelector(`.input_gen_cont`),
    floater_indicator: document.querySelector(`.arrow_shape`),
    generation_guide: document.querySelector(`.generation_guide`)
}

let backupVariables = {
    iterationShown: false,
    globalteration: 1,
    lastTime: 0,
}

let lastIterationQueries = {
    iterations: [],
}

let usefulVariables = {
    currentAlgorithm: 'none',
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
    algo10: [0],
    algo1labels: [0],
    algo2labels: [0],
    algo3labels: [0],
    algo4labels: [0],
    algo5labels: [0],
    algo6labels: [0],
    algo7labels: [0],
    algo8labels: [0],
    algo9labels: [0],
    algo10labels: [0],
}

let chartCurrentData = {
    labels: [],
    data: []
}

let graph_cont = document.getElementById('graph_cont').getContext('2d');

let pageLogics = {
    floater_gen_shrunk: false,
    floater_inflated: false,
}

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

let graphGenerationTracker = {
    nodesUsedSoFar: new PriorityQueue(),
    parentNodesUsedSoFar: new PriorityQueue(),
    nodesArray: [],
    edgesUsedSofar: [],
    parentNodesUsedSoFarArray: [],
    infiniteStackTracker: 0,
}