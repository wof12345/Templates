generateBackground(numOfGrid); //24384
generateBlockades(500);
quickSort(blockades, 0, blockades.length - 1);

function driverFunction(currentNode) {
    let currentNeighbors = [];
    let arrayToFollow = neighborParams.middle;

    if (currentNode % 96 === 0) {
        arrayToFollow = neighborParams.right;
    }
    if ((currentNode - 1) % 96 === 0) {
        arrayToFollow = neighborParams.left;
    }

    for (let i = 0; i < arrayToFollow.length; i++) {
        // console.log(arrayToFollow);
        let neighTemNode = currentNode + +arrayToFollow[i];
        let parentPosition, position, distance;
        // console.log(neighTemNode);

        if (neighTemNode <= 12192 && neighTemNode > 0) {
            currentNeighbors.push(neighTemNode)
                // console.log( currentGridInfo.allCheckedNodes.find((value)=>{value===neighTemNode}));

            // console.log(`Driver function node : `,currentNode, currentGridInfo.gridToNodeRelations[currentNode]);

            currentGridInfo.gridToNodeRelations[currentNode].push(neighTemNode);
            currentGridInfo.gridToNodeRelations[neighTemNode].push(currentNode);

            position = getPosition(neighTemNode);
            parentPosition = getPosition(currentNode)
            distance = Math.pow((position[0] - parentPosition[0]), 2) + Math.pow((position[1] - parentPosition[1]), 2);
            currentGridInfo.gridToNodeWeights[currentNode].push(distance);
            currentGridInfo.gridToNodeWeights[neighTemNode].push(distance);

            // console.log(`Neighbor node : ${i+1} :: ${neighTemNode} :: position : ${position} :: distance from parents : ${distance}`);
        }
    }

    illuminatePath('', currentNeighbors, 'rgba(255, 0, 0, 0.99)')
    tempi++;
    // driverFunction(nextPreferredNode, target);
}

function determineJourneyStats(elementId) {
    // console.log(elementId);

    initiateGridInfo(playerCharacterPosition.lastPositionId);
    Dijkstra(elementId);
}

function placePlayerCharacter(element, elementId, position) {
    // console.log(element, elementId, position);


    if (element.lastChild ?.className !== 'playerCharacter' && !playerCharacterPosition.placed) {
        element.insertAdjacentHTML('beforeend', '<div class="playerCharacter"></div>')
        playerCharacterPosition.placed = true;
        playerCharacter = document.querySelector(`.playerCharacter`)
        playerCharacterPosition.posX = position[0];
        playerCharacterPosition.posY = position[1];
        playerCharacterPosition.currentPositionId = elementId;
        playerCharacterPosition.lastPositionId = elementId;

        generalAnimation(position);
        // testFunction(20);
        endSequence(playerCharacterPosition.currentPositionId);
    } else {
        determineJourneyStats(elementId);
    }
    // console.log('Pos : ', playerCharacterPosition.currentPositionId);

}

background.addEventListener('click', function(e) {
    let goingto = e.target;
    let topPos = goingto.offsetTop - 10;
    let leftPos = goingto.offsetLeft - 14;
    if (goingto.className === 'playerCharacter') {
        // console.log('current position : ', leftPos, topPos);

    }
    if (elementStat.moveComplete && !binarySearch(blockades, 0, blockades.length - 1, +goingto.id) && !(goingto.className === 'playerCharacter')) {
        elementStat.moveComplete = false;
        playerCharacterPosition.currentPositionId = goingto.id;
        playerClickCounter++;
        resetGridInfo();
        // console.log(currentGridInfo);


        if (e.target.className !== 'playerCharacter') {
            if (!playerCharacterPosition.placed)
                goingto = document.querySelector(`.seed_1`);

            placePlayerCharacter(goingto, playerCharacterPosition.currentPositionId, [leftPos, topPos]);
        }
    }
})

document.body.addEventListener('keydown', function(e) {
    if (e.key === 't') {
        if (movementScheme === 1)
            movementScheme = 2;
        else
            movementScheme = 1;
    }
    showFloatingMsg('Movement scheme changed');
})

// function testFunction(value) {
//     if (value <= 0) return;

//     let temppos1, temppos2;
//     if (generateRandomNumber(100) < 20) {
//         temppos1 = 10;
//         temppos2 = 10;
//     } else if (generateRandomNumber(100) < 40) {
//         temppos1 = 10;
//         temppos2 = -10;
//     } else if (generateRandomNumber(100) < 60) {
//         temppos1 = -10;
//         temppos2 = 10;
//     } else if (generateRandomNumber(100) < 80) {
//         temppos1 = -10;
//         temppos2 = -10;
//     }

//     playerCharacterPosition.posX += temppos1;
//     playerCharacterPosition.posY += temppos2;

//     console.log(temppos1, temppos2);


//     generalAnimation([playerCharacterPosition.posX, playerCharacterPosition.posY])
//     setTimeout(() => {
//         testFunction(--value)
//     }, 2000)
// }