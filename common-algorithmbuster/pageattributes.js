const executionButton = document.querySelector(`.start_execution`);
const resultClearButton = document.querySelector(`.clear`);


executionButton.addEventListener('click', () => {
    const selectionValue = document.getElementById(`choice`).value;
    let input = document.getElementById(`input`).value;
    let givenArray = input.split(',');

    if (selectionValue === 'selection-sort') {
        selectionSort(givenArray);
    }

})

resultClearButton.addEventListener('click', () => {
    let children = pageElements.resultDisplay;
    while (children.childElementCount) {
        children.removeChild(children.firstElementChild)
    }
})