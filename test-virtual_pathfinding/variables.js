let tempi = 0;
let currentPath = [];
let background = document.querySelector(`.background`)
let floatingMsg = document.querySelector(`.floating_message`)
let playerCharacter = document.querySelector(`.playerCharacter`)
let numOfGrid = 12192;
let playerClickCounter = 0;
let blockades = [];
let movementScheme = 1;
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
    yChangeConstant: 96,
    xDistanceConstant: 10,
    yDistanceConstant: 10,
}
let elementStat = {
    moveComplete: true,
}
let neighborParams = {
    left: [-96, -95, 1, 97, 96],
    middle: [-97, -96, -95, -1, 1, 95, 96, 97],
    right: [-97, -96, -1, 96, 95],
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
}