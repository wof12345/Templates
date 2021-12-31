generateBackground(numOfGrid); //24384
setGrid();
generateBlockades(numOfBlockades);
quickSort(blockades, 0, blockades.length - 1);

function driverFunction(currentNode) {
    let currentNeighbors = [];
    let arrayToFollow = neighborParams.middle;

    if (currentNode % gridStats.columns === 0) {
        arrayToFollow = neighborParams.right;
    }
    if ((currentNode - 1) % gridStats.columns === 0) {
        arrayToFollow = neighborParams.left;
    }

    for (let i = 0; i < arrayToFollow.length; i++) {
        let neighTemNode = currentNode + +arrayToFollow[i];
        let distance;

        if (neighTemNode <= numOfGrid && neighTemNode > 0) {
            currentNeighbors.push(neighTemNode)

            currentGridInfo.gridToNodeRelations[currentNode].push(neighTemNode);
            currentGridInfo.gridToNodeRelations[neighTemNode].push(currentNode);

            distance = calculateDistance(neighTemNode, currentNode);
            currentGridInfo.gridToNodeWeights[currentNode].push(distance);
            currentGridInfo.gridToNodeWeights[neighTemNode].push(distance);
        }
    }

    illuminatePath('', currentNeighbors, 'rgba(255, 0, 0, 0.99)')
    tempi++;
}

function determineJourneyStats(elementId) {
    initiateGridInfo(playerCharacterPosition.lastPositionId);
    if (elementStat.currentAlgorithm === 'Dijkstra')
        Dijkstra(elementId);
    else
        Astar(elementId);
}

function placePlayerCharacter(element, elementId, position) {
    currentGridInfo.currentTarget = elementId;
    if (element.lastChild ?.className !== 'playerCharacter' && !playerCharacterPosition.placed) {
        element.insertAdjacentHTML('beforeend', '<div class="playerCharacter"></div>')
        playerCharacterPosition.placed = true;
        playerCharacter = document.querySelector(`.playerCharacter`)
        playerCharacterPosition.posX = position[0];
        playerCharacterPosition.posY = position[1];
        playerCharacterPosition.currentPositionId = elementId;
        playerCharacterPosition.lastPositionId = elementId;

        generalAnimation(position);
        endSequence(playerCharacterPosition.currentPositionId);
    } else {
        illuminatePath('', [elementId], 'rgba(255, 0, 0, 0.5)')
        determineJourneyStats(elementId);
    }

}

background.addEventListener('click', function(e) {
    let goingto = e.target.id;
    let pos = getPosition(goingto)
    let topPos = pos[1];
    let leftPos = pos[0];
    if (goingto.className === 'playerCharacter') {}
    if (elementStat.moveComplete && !binarySearch(blockades, 0, blockades.length - 1, +goingto) && !(goingto.className === 'playerCharacter')) {
        elementStat.moveComplete = false;
        playerCharacterPosition.currentPositionId = goingto;
        playerClickCounter++;
        resetGridInfo();

        if (e.target.className !== 'playerCharacter') {
            if (!playerCharacterPosition.placed)
                goingto = document.querySelector(`.seed_1`);

            placePlayerCharacter(goingto, playerCharacterPosition.currentPositionId, [leftPos, topPos]);
        }
    }
})

algo_select.addEventListener('change', function(e) {
    let algorithm = algo_select.value;
    algorithmView.textContent = `Movement algorithm is ${algorithm}.`;
    elementStat.currentAlgorithm = algorithm;

    showFloatingMsg(`Algorithm changed to ${elementStat.currentAlgorithm}`, 1000);
})