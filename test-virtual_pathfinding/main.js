let background = document.querySelector(`.background`)
let playerCharacter;
let playerCharacterPosition = {
    placed: false,
    posX: 0,
    posY: 0,
    xDistanceConstant: 112,
    yDistanceConstant: 75,
}

function generalAnimation(position) {
    playerCharacter.style = `transform :translate(${position[0]}px,${position[1]}px)`
}

function executeFirst(it, destinationCoordinates) {
    let minorEffect = (it % 2 != 0 ? 112 : 113);
    if (destinationCoordinates[0] > playerCharacterPosition.posX)
        playerCharacterPosition.posX += minorEffect;
    else if (destinationCoordinates[0] < playerCharacterPosition.posX)
        playerCharacterPosition.posX -= (it % 2 == 0 ? 112 : 113);

    if(destinationCoordinates[0]===0 && (playerCharacterPosition.posX<0 || playerCharacter.posX===1)){
        playerCharacterPosition.posX=0;
    }
    if(playerCharacterPosition.posX ===787){
        playerCharacterPosition.posX+=1;
    }

    console.log(`First : `,minorEffect , it, playerCharacterPosition.posX, playerCharacterPosition.posY);

    generalAnimation([playerCharacterPosition.posX, playerCharacterPosition.posY]);
}

function executeSecond(destinationCoordinates) {
    if (destinationCoordinates[1] > playerCharacterPosition.posY)
        playerCharacterPosition.posY += 75;
    else if (destinationCoordinates[1] < playerCharacterPosition.posY)
        playerCharacterPosition.posY -= 75;

    console.log(`Second : ${playerCharacterPosition.posX},${playerCharacterPosition.posY}`);

    generalAnimation([playerCharacterPosition.posX, playerCharacterPosition.posY]);
}

function generateBackground(count) {
    for (let counter = 1; counter <= count; counter++)
        background.insertAdjacentHTML('beforeend', `<div class="landmark seed_${counter}" id="${counter}"></div>`)
}

function runMoveSequence(axis, total, forth, it, position, id) {


    if (it <= forth) {

        if (axis[0] === 'x')
            executeFirst(id, position);

        if (axis[0] === 'y')
            executeSecond(position);

    } else {

        if (axis[0] === 'x')
            executeSecond(position);

        if (axis[0] === 'y')
            executeFirst(id, position);
    }
    if (it >= total) return;

    setTimeout(() => {
        runMoveSequence(axis, total, forth, ++it, position, ++id);
    }, 300)
}

function determineJourneyStats(destinationCoordinates, position, elementId) {
    let loopsForX = Math.floor(Math.abs(destinationCoordinates[0] / playerCharacterPosition.xDistanceConstant));
    let loopsForY = Math.floor(Math.abs(destinationCoordinates[1] / playerCharacterPosition.yDistanceConstant));
    let latter, forth, axis = [];

    if (loopsForX < loopsForY) {
        forth = loopsForX;
        latter = loopsForY;
        axis[0] = 'x';
        axis[1] = 'y';
    } else {
        forth = loopsForY;
        latter = loopsForX;
        axis[0] = 'y';
        axis[1] = 'x';
    }

    let total = forth + latter;
    console.log(total, forth, latter, elementId);


    runMoveSequence(axis, total, forth, 1, position, +elementId);

}

function placePlayerCharacter(element, elementId, position) {

    if (element.lastChild ?.className !== 'playerCharacter' && !playerCharacterPosition.placed) {
        element.insertAdjacentHTML('beforeend', '<div class="playerCharacter"></div>')
        playerCharacterPosition.placed = true;
        playerCharacter = document.querySelector(`.playerCharacter`)
        playerCharacterPosition.posX = position[0];
        playerCharacterPosition.posY = position[1];

        generalAnimation(position);
    } else {
        let distanceX = position[0] - playerCharacterPosition.posX;
        let distanceY = position[1] - playerCharacterPosition.posY;

        console.log(`Distance crossed : (${distanceX},${distanceY})`);
        determineJourneyStats([distanceX, distanceY], position, elementId);
        console.log(position);


        // playerCharacterPosition.posX = position[0];
        // playerCharacterPosition.posY = position[1];


        // generalAnimation(position);

    }
}

generateBackground(64);

background.addEventListener('click', function(e) {
    let goingto = e.target;
    let topPos = goingto.offsetTop - 10;
    let leftPos = goingto.offsetLeft - 59;
    let destinationId = goingto.id;
    // console.log(leftPos, topPos);


    if (e.target.className !== 'playerCharacter') {
        if (!playerCharacterPosition.placed)
            goingto = document.querySelector(`.seed_1`)

        placePlayerCharacter(goingto, destinationId, [leftPos, topPos]);
    }
})