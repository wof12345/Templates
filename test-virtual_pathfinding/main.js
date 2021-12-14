let background = document.querySelector(`.background`)
let floatingMsg = document.querySelector(`.floating_message`)
let playerCharacter;
let currentPath = [];
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
let neighborParams = [-97, -96, -95, -1, 1, 95, 96, 97];
let totalPathCost = 0;

function generateRandomNumber(limit) {
    return Math.random() * limit + 1;
}

function generateBackground(count) {
    for (let counter = 1; counter <= count; counter++)
        background.insertAdjacentHTML('beforeend', `<div class="landmark seed_${counter}" id="${counter}"></div>`)
}

function generateBlockades(count) {
    for (let counter = 1; counter <= count; counter++) {
        let seed = Math.round(generateRandomNumber(7000));
        blockades.push(seed);
    }
    paintBlockades(blockades);
}

function paintBlockades(array) {
    for (let counter = 0; counter < array.length; counter++) {
        document.getElementById(array[counter]).style = 'background-color:black'
    }
}

generateBackground(12192); //24384
generateBlockades(0);
quickSort(blockades, 0, blockades.length - 1);

function showFloatingMsg(string) {
    floatingMsg.textContent = string;
    floatingMsg.style = `padding:20px;width:max-content`

    setTimeout(() => {
        floatingMsg.textContent = ``;
        floatingMsg.style = null;
    }, 1000)
}

function generalAnimation(position) {
    playerCharacter.style = `transform :translate(${position[0]}px,${position[1]}px)`
}

// function executeFirst(id, coordinate) {
//     if (coordinate === 'x') {
//         playerCharacterPosition.posX += playerCharacterPosition.xDistanceConstant;
//         id += 1;
//     } else {
//         playerCharacterPosition.posX -= playerCharacterPosition.xDistanceConstant;
//         id -= 1;
//     }


//     generalAnimation([playerCharacterPosition.posX, playerCharacterPosition.posY]);
//     return id;
// }

// function executeSecond(id, coordinate) {

//     if (coordinate === 'y') {
//         playerCharacterPosition.posY += playerCharacterPosition.yDistanceConstant;
//         id += playerCharacterPosition.yChangeConstant;

//     } else {
//         playerCharacterPosition.posY -= playerCharacterPosition.yDistanceConstant;
//         id -= playerCharacterPosition.yChangeConstant;
//     }

//     console.log(id);


//     generalAnimation([playerCharacterPosition.posX, playerCharacterPosition.posY]);
//     return id;
// }

// function executeGeneral(id, destinationCoordinates) {
//     if (destinationCoordinates[0] > playerCharacterPosition.posX) {
//         playerCharacterPosition.posX += playerCharacterPosition.xDistanceConstant;
//         id += 1;
//     } else if (destinationCoordinates[0] < playerCharacterPosition.posX) {
//         playerCharacterPosition.posX -= playerCharacterPosition.xDistanceConstant;
//         id -= 1;
//     }

//     if (destinationCoordinates[1] > playerCharacterPosition.posY) {
//         playerCharacterPosition.posY += playerCharacterPosition.yDistanceConstant;
//         id += playerCharacterPosition.yChangeConstant;
//     } else if (destinationCoordinates[1] < playerCharacterPosition.posY) {
//         playerCharacterPosition.posY -= playerCharacterPosition.yDistanceConstant;
//         id -= playerCharacterPosition.yChangeConstant;
//     }

//     // console.log(`General : `, playerCharacterPosition.posX, playerCharacterPosition.posY);

//     generalAnimation([playerCharacterPosition.posX, playerCharacterPosition.posY]);

//     return id;
// }

function illuminatePath(command, currentPath, color) {
    for (let iteration = 0; iteration < currentPath.length; iteration++) {
        // console.log(currentPath[iteration]);

        if (currentPath[iteration] && +currentPath[iteration] > 0 && +currentPath[iteration] < 12192)
            document.getElementById(currentPath[iteration]).style = `background-color:${color};`
    }
    if (command === "erase") {
        for (let iteration = 0; iteration < currentPath.length; iteration++) {
            if (currentPath[iteration])
                document.getElementById(currentPath[iteration]).style = '';
        }
    }
}

function endSequence(currentPositionId) {
    elementStat.moveComplete = true;
    playerCharacterPosition.lastPositionId = currentPositionId;
    document.getElementById(playerCharacterPosition.currentPositionId).style = ``;
}

// function runMoveSequenceIneffecient(axis, length, moveIteration, position, id) {

//     let res = binarySearch(blockades, 0, blockades.length - 1, id)
//     if (res) {


//         // console.log(id);
//         return;
//     } else {


//         if (moveIteration < length) {
//             console.log('Iteration : ', moveIteration);

//             if (axis[moveIteration] === 'x' || axis[moveIteration] === '-x') {
//                 id = executeFirst(id, axis[moveIteration])
//                 currentPath.push(id);
//                 totalPathCost += 10;
//             } else if (axis[moveIteration] === 'y' || axis[moveIteration] === '-y') {
//                 id = executeSecond(id, axis[moveIteration])
//                 currentPath.push(id);
//                 totalPathCost += 10;
//             }
//         }


//         illuminatePath();
//         if (moveIteration >= length) {
//             endSequence(playerCharacterPosition.currentPositionId);
//             return;
//         }
//     }

//     setTimeout(() => {
//         console.log(totalPathCost + " : Pathcost");
//         runMoveSequenceIneffecient(axis, length, ++moveIteration, position, id);
//     }, timeConst)


// }

// function runMoveSequenceEfficient(it, total, position, id) {
//     id = executeGeneral(id, position)
//     currentPath.push(id);


//     illuminatePath();

//     if (it >= total) {
//         endSequence(playerCharacterPosition.currentPositionId);
//         return;
//     }


//     setTimeout(() => {
//         runMoveSequenceEfficient(++elementStat.moveIteration, total, position, id);
//     }, timeConst)
// }
function getPosition(elm2) {
    let elm = document.getElementById(elm2);
    console.log(elm2)
    let xpos = elm.offsetLeft - 14;
    let ypos = elm.offsetTop - 10;
    return [xpos, ypos];
}

let tempi = 0;

function driverFunction(currentNode, target) {
    let currentNeighbors = [];

    if (currentNode == target[0]) return;
    let min = 1000000;
    let current = 0;
    let nextPreferredNode = 0;
    console.log('Passed node and target node : ', currentNode, target);
    console.log(`target\'s coord : ${target[1]}`);

    for (let i = 0; i < 8; i++) {
        let neighTemNode = +currentNode + +neighborParams[i];
        let tempCoord = getPosition('' + neighTemNode);
        console.log(`Target : `, target[1]);
        let distanceXDiff = target[1][0] - tempCoord[0];
        let distanceYDiff = target[1][1] - tempCoord[1];

        if (distanceXDiff !== 0 && distanceYDiff !== 0) {
            current = distanceXDiff > distanceYDiff ? distanceXDiff : distanceYDiff;
            console.error(current);
            if (min > current) {
                min = current;
                nextPreferredNode = neighTemNode;
            }

        } else {
            return;
        }
       


        console.log(`Neighbor node : ${i+1} :: ${neighTemNode}, Distance from node ${target[0]};${target[0][1]},${target[0][1]}, Coord of current Negh : ${tempCoord},Distance : ${distanceXDiff},${distanceYDiff}`);

        // console.log('Passed element : ', neighTemNode);
        // let tempCoord = getPosition('' + neighTemNode);
        // let temp = tempCoord[0] + tempCoord[1];

        // let distance = Math.abs(temp - target[1]);
        // if (min > distance) {
        //     min = distance;
        //     nextPreferredNode = neighTemNode;
        // }
        // console.log((`${getPosition(''+neighTemNode)}::${neighTemNode} : ${distance}`));
        // currentNeighbors.push(neighTemNode);
    }

    console.log('End of current  : ', min, nextPreferredNode, target);
    // illuminatePath('', currentNeighbors, 'red')
    // tempi++;
    // driverFunction(nextPreferredNode, target);
}

function determineJourneyStats(destinationCoordinates, position, elementId) {
    totalPathCost = 0;
    let axis = [],
        tracebackPaths = [];

    // console.log('positioon/destination : ', destinationCoordinates, playerCharacterPosition.posX, playerCharacterPosition.posY);

    console.log(elementId);
    console.log(`Neighbors of ${playerCharacterPosition.lastPositionId} : `);
    driverFunction(playerCharacterPosition.lastPositionId, [elementId, position])


    // currentPath.push(playerCharacterPosition.lastPositionId)

    if (movementScheme === 1) {
        // runMoveSequenceIneffecient(axis, axis.length, 0, position, +playerCharacterPosition.lastPositionId);
    }
}

function placePlayerCharacter(element, elementId, position) {

    if (element.lastChild ?.className !== 'playerCharacter' && !playerCharacterPosition.placed) {
        element.insertAdjacentHTML('beforeend', '<div class="playerCharacter"></div>')
        playerCharacterPosition.placed = true;
        playerCharacter = document.querySelector(`.playerCharacter`)
            // playerCharacterPosition.posX = position[0];
            // playerCharacterPosition.posY = position[1];
        playerCharacterPosition.currentPositionId = elementId;
        playerCharacterPosition.lastPositionId = elementId;

        generalAnimation(position);
        endSequence(playerCharacterPosition.currentPositionId);
    } else {
        let distanceX = position[0] - playerCharacterPosition.posX;
        let distanceY = position[1] - playerCharacterPosition.posY;

        determineJourneyStats([distanceX, distanceY], position, elementId);

    }
}

background.addEventListener('click', function(e) {
    let goingto = e.target;
    let topPos = goingto.offsetTop - 10;
    let leftPos = goingto.offsetLeft - 14;
    if (goingto.className === 'playerCharacter') {
        console.log('current position : ', leftPos, topPos);

    }
    if (elementStat.moveComplete && !binarySearch(blockades, 0, blockades.length - 1, +goingto.id) && !(goingto.className === 'playerCharacter')) {
        if (playerClickCounter > 1) elementStat.moveComplete = false;
        playerCharacterPosition.currentPositionId = goingto.id;
        playerClickCounter++;
        illuminatePath('erase', currentPath, 'black');
        currentPath = [];

        console.log('Element position : ', leftPos, topPos, playerCharacterPosition.currentPositionId);

        paintBlockades(blockades);
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