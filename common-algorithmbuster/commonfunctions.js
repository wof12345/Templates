function iterationView(iterationNumber, information1, changes, currentInputState, originalInput) {
    pageElements.resultDisplay.insertAdjacentHTML('beforeend', iteraionBlock.block(iterationNumber, information1, changes, currentInputState, originalInput))
}