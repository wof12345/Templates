function generateRandomNumber(limit) {
    return Math.random() * limit + 1;
}

function fixPath(collection) {
    let temp = collection.shift();
    collection.push(temp);
}

function setGrid() {
    gridStats.rows = numOfGrid / gridStats.columns;
    background.style = ` grid-template-columns: repeat(${gridStats.columns}, 10px); grid-template-rows: repeat(${gridStats.rows}, 10px);`
    background.style.width = `${gridStats.columns*10}px`
    background.style.height = `${gridStats.rows*10}px`
}

function generateBackground(count) {
    for (let counter = 1; counter <= count; counter++)
        background.insertAdjacentHTML('beforeend', `<div class="landmark seed_${counter}" id="${counter}"></div>`)
}

function generateBlockades(count) {
    for (let counter = 1; counter <= count; counter++) {
        let seed = Math.round(generateRandomNumber(numOfGrid));
        blockades.push(seed);
    }
    illuminatePath('override', blockades, 'rgb(0, 0, 0)');
}

function showFloatingMsg(string, time) {
    floatingMsg.textContent = string;
    floatingMsg.style = `padding:20px;width:max-content`

    setTimeout(() => {
        floatingMsg.textContent = ``;
        floatingMsg.style = null;
    }, time)
}

function endSequence(currentPositionId) {
    elementStat.moveComplete = true;
    playerCharacterPosition.lastPositionId = currentPositionId;
    document.getElementById(playerCharacterPosition.currentPositionId).style = ``;
}

function getPosition(elm2) {
    let elm = document.getElementById(elm2);
    let xpos = elm.offsetLeft - gridStats.fixerVarLeft;
    let ypos = elm.offsetTop - gridStats.fixerVarTop;
    return [xpos, ypos];
}

function resetPlayerChar() {
    playerCharacterPosition.placed = false;
    document.getElementById(`1`).lastChild.remove();
    elementStat.moveComplete = true;
}

function illuminatePath(command, currentPath, color) {
    for (let iteration = 0; iteration < currentPath.length; iteration++) {
        if (currentPath[iteration] && +currentPath[iteration] > 0 && +currentPath[iteration] <= numOfGrid) {
            let element = document.getElementById(currentPath[iteration]);
            let elementColor = element.style.backgroundColor + '';

            if (command === "override") {
                element.style = `background-color:${color};`
            }


            if (elementColor !== 'rgb(255, 255, 255)' && elementColor !== color && elementColor != 'rgb(0, 0, 0)') {
                element.style = `background-color:${color};`

                if (color !== 'rgb(0, 0, 0)') {
                    currentGridInfo.allCheckedNodes.push(currentPath[iteration]);
                }

            }
        }
    }
}

function generalAnimation(position) {
    playerCharacter.style = `transform :translate(${position[0]}px,${position[1]}px)`
}

function initiateGridInfo(elementId) {
    for (let i = 0; i < numOfGrid; i++) {
        currentGridInfo.gridToNodeRelations[i + 1] = [];
        currentGridInfo.gridToNodeWeights[i + 1] = [];
        currentGridInfo.gridToNodeLevel[i + 1] = [];
        currentGridInfo.gridToNodeDistanceFromSource[i + 1] = Infinity;
        currentGridInfo.gridToNodeDistanceToTarget[i + 1] = -1;
    }
    currentGridInfo.pqForPathfinding.push(elementId, 0);
    currentGridInfo.gridToNodeDistanceFromSource[elementId] = 0;
    currentGridInfo.gridToNodeLevel[elementId] = -1;
    currentGridInfo.parentNode[elementId] = -1;
    currentGridInfo.allCheckedNodes.push(elementId);
    currentGridInfo.currentSource = elementId;
}

function resetGridInfo() {
    currentGridInfo.gridToNodeRelations = [];
    currentGridInfo.gridToNodeDistanceFromSource = [];
    currentGridInfo.gridToNodeDistanceToTarget = [];
    currentGridInfo.gridToNodeWeights = [];
    currentGridInfo.gridToNodeLevel = [];
    currentGridInfo.parentNode = [];
    currentGridInfo.pqForPathfinding.removeAll();
    currentPath = [];
    currentGridInfo.closedNode = [];
    currentGridInfo.currentSmallestfCost = Infinity;
    tempi = 0;
    illuminatePath('override', currentGridInfo.allCheckedNodes, 'rgb(0, 255, 0)');
    currentGridInfo.allCheckedNodes = [];
}

function printShortestPath(parents, node) {

    if (parents[node] === -1) {
        currentPath.push(node + "");
        return;
    }

    printShortestPath(parents, parents[node]);


    currentPath.push(node + "");

}


function algorithmEndingAction(target, command) {
    if (command !== "nopath") {
        illuminatePath('override', [currentGridInfo.currentSource], 'yellow');

        printShortestPath(currentGridInfo.parentNode, target)

        placePlayerCharacterGrid(target);
        illuminatePath('override', currentPath, 'yellow');
        console.log(currentPath);
    } else {
        showFloatingMsg(`No path valid!`, 3000);
        resetPlayerChar();
    }
}

function placePlayerCharacterGrid(target) {
    if (currentPath.length <= 0) {
        playerCharacterPosition.lastPositionId = target;
        elementStat.moveComplete = true;
        return;
    }
    let position = getPosition(currentPath.shift());

    generalAnimation(position);

    setTimeout(() => {
        placePlayerCharacterGrid(target);

    }, 200)
}

function calculateDistance(source, target) {
    let sourcePos = getPosition(source);
    let targetPos = getPosition(target);

    let distance = Math.pow((sourcePos[0] - targetPos[0]), 2) + Math.pow((sourcePos[1] - targetPos[1]), 2);

    return distance;
}