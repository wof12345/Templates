function illuminatePath(command, currentPath, color) {
    // console.log(currentGridInfo.allCheckedNodes);
    for (let iteration = 0; iteration < currentPath.length; iteration++) {
        // console.log(currentPath[iteration]);
        let element = document.getElementById(currentPath[iteration]);
        // console.log();
        let elementColor = window.getComputedStyle(element, null).getPropertyValue("background-color") + '';

        // console.log(elementColor, elementColor !== 'rgb(255, 255, 255)');

        if (command === "erase") {
            if (currentPath[iteration])
                element.style = '';
        }
        if (command === "override") {
            // console.log(element);

            if (currentPath[iteration] && +currentPath[iteration] > 0 && +currentPath[iteration] < 12192) {
                // console.log(currentPath[iteration]);

                element.style = `background-color:${color};`
            }

        }
        // console.log(elementColor,color,elementColor !== color);

        if (currentPath[iteration] && +currentPath[iteration] > 0 && +currentPath[iteration] < 12192 && elementColor !== 'rgb(255, 255, 255)' && elementColor !== color && elementColor != 'rgb(0, 0, 0)') {
            element.style = `background-color:${color};`

            if (color === 'rgb(255, 0, 0)')
                currentGridInfo.allCheckedNodes.push(currentPath[iteration]);
            // console.log(element, elementColor);

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
    }
    currentGridInfo.pqForPathfinding.push(elementId, 0);
    currentGridInfo.gridToNodeDistanceFromSource[elementId] = 0;
    currentGridInfo.gridToNodeLevel[elementId] = -1;
    currentGridInfo.parentNode[elementId] = -1;
    currentGridInfo.closedNode.push(elementId);
    currentGridInfo.allCheckedNodes.push(elementId);
    currentGridInfo.currentSource = elementId;
}

function resetGridInfo() {
    currentGridInfo.gridToNodeRelations = [];
    currentGridInfo.gridToNodeDistanceFromSource = [];
    currentGridInfo.gridToNodeWeights = [];
    currentGridInfo.gridToNodeLevel = [];
    currentGridInfo.parentNode = [];
    currentGridInfo.pqForPathfinding.removeAll();
    currentPath = [];
    currentGridInfo.closedNodes = [];
    console.log(currentGridInfo.allCheckedNodes);
    illuminatePath('override', currentGridInfo.allCheckedNodes, 'rgb(0, 255, 0)');
    currentGridInfo.allCheckedNodes = [];
}

function printShortestPath(parents, node) {

    if (parents[node] === -1) {
        currentPath.push(node + "");
        return;
    }

    printShortestPath(parents, parents[node]);

    console.log(node + " ");
    currentPath.push(node + "");

}

function algorithmEndingAction(target) {
    illuminatePath('override', [currentGridInfo.currentSource], 'yellow');
    // console.log(currentGridInfo.gridToNodeRelations[target]);
    // console.log(currentGridInfo.gridToNodeWeights[target]);
    // console.log(currentGridInfo.gridToNodeDistanceFromSource[target]);
    printShortestPath(currentGridInfo.parentNode, target)
        // console.log(currentPath);
    placePlayerCharacterGrid();
    playerCharacterPosition.lastPositionId = target;
    console.log(currentPath);
    elementStat.moveComplete = true;

    illuminatePath('override', currentPath, 'yellow');
}

function placePlayerCharacterGrid() {
    if (currentPath.length <= 0) {
        return;
    }
    let position = getPosition(currentPath.shift());
    // console.log(currentPath.shift())


    generalAnimation(position);

    setTimeout(() => {
        placePlayerCharacterGrid();

    }, 200)
}