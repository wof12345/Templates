let tempi = 0;
let currentPath = [];
let algo_select = document.getElementById(`algo`);
let sourceView = document.getElementById(`source`)
let currentView = document.getElementById(`current`)
let targetView = document.getElementById(`target`)
let algorithmView = document.querySelector(`.header`)
let background = document.querySelector(`.background`)
let floatingMsg = document.querySelector(`.floating_message`)
let playerCharacter = document.querySelector(`.playerCharacter`)

let numOfGrid = 7000;
let numOfBlockades = 4000;
let gridStats = {
    columns: 100,
    rows: 0,
    fixerVarTop: background.offsetTop,
    fixerVarLeft: background.offsetLeft,
}
let playerClickCounter = 0;
let blockades = [];
let moveLogic = {
    triedYpos: false,
    triedXpos: false,
}
let timeConst = 100;
let playerCharacterPosition = {
    placed: false,
    lastPositionId: 1,
    currentPositionId: 1,
    posX: 0,
    posY: 0,
    yChangeConstant: gridStats.columns,
    xDistanceConstant: 10,
    yDistanceConstant: 10,
}
let elementStat = {
    moveComplete: true,
    currentAlgorithm: 'Dijkstra',
}
let neighborParams = {
    left: [-gridStats.columns, -(gridStats.columns - 1), 1, (gridStats.columns + 1), gridStats.columns],
    middle: [-(gridStats.columns + 1), -gridStats.columns, -(gridStats.columns - 1), -1, 1, (gridStats.columns - 1), gridStats.columns, (gridStats.columns + 1)],
    right: [-(gridStats.columns + 1), -gridStats.columns, -1, gridStats.columns, (gridStats.columns - 1)],
    singleLeft: -1,
    singleRight: 1,
    singleTop: -gridStats.columns,
    singleBottom: gridStats.columns,
    singleCrossLeftBottom: (gridStats.columns - 1),
    singleCrossRightBottom: (gridStats.columns + 1),
    singleCrossRightTop: -(gridStats.columns - 1),
    singleCrossLeftTop: -(gridStats.columns + 1),
}

let currentGridInfo = {
    gridToNodeRelations: [],
    gridToNodeDistanceFromSource: [],
    gridToNodeWeights: [],
    gridToNodeLevel: [],
    pqForPathfinding: new PriorityQueue(),
    parentNode: [],
    closedNode: [],
    allCheckedNodes: [],
    currentSource: 0,
    currentTarget: 0,
    gridToNodeDistanceToTarget: [],
    currentSmallestfCost: Infinity,
}

let debugVars = {
    maxIteration: 20,
    currentIteration: 0,
}