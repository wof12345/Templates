const executionButton = document.querySelector(`.start_execution`);
const resultClearButton = document.querySelector(`.clear`);
const mainText = document.querySelector(`.main_text`);
let selectionValue = document.getElementById(`choice`).value;
// console.log(mainText);


pageElements.choice.addEventListener('change', () => {
    setInfo(getInfo(pageElements.choice.value));
    selectionValue = document.getElementById(`choice`).value;
    mainText.textContent = 'Input for the algorithm (If array, elements should be seperated by "," or " ". Note that iterations are not balanced :)';
    if (selectionValue === 'BFS') {
        console.log(selectionValue);

        mainText.textContent = 'Input should be seperated by space and comma. E.g. (2 3,4 5,6 7). Note that first line only represents the number of nodes and edges.'
    }
})

executionButton.addEventListener('click', () => {
    clear();
    mainText.textContent = 'Input for the algorithm (If array, elements should be seperated by "," or " ". Note that iterations are not balanced :)';

    const selectionValue = document.getElementById(`choice`).value;
    let input = document.getElementById(`input`).value;
    let givenArray = input.split(/,| /);
    // console.log(givenArray);


    givenarray = numberify(givenArray);
    if (selectionValue === 'Selection-sort') {
        selectionSort(givenArray);
    }
    if (selectionValue === 'Insertion-sort') {
        insertionsort(givenArray);
    }
    if (selectionValue === 'Merge-sort') {
        let originalInput = [];
        originalInput += givenArray;
        timer('start');
        mergesort(givenArray, 0, givenArray.length - 1, originalInput);
        const timeTaken = timer('stop');
        iterationPush(`Iterated : ${backupVariables.globalteration-1} times.`, `Time taken : ${timeTaken} seconds`, ``, `Current collection : ${givenArray}`, `Original collection : ${originalInput}`)
        invoke_floater('left:10px;top:20px', `Iterated : ${backupVariables.globalteration-1} times. Time taken : ${timeTaken} seconds`, 2000);
        backupVariables.lastTime = timeTaken;
    }
    if (selectionValue === 'Quick-sort') {
        let originalInput = [];
        originalInput += givenArray;
        timer('start');
        quickSort(givenArray, 0, givenArray.length - 1, originalInput);
        const timeTaken = timer('stop');
        iterationPush(`Iterated : ${backupVariables.globalteration-1} times.`, `Time taken : ${timeTaken} seconds`, ``, `Current collection : ${givenArray}`, `Original collection : ${originalInput}`)
        invoke_floater('left:10px;top:20px', `Iterated : ${backupVariables.globalteration-1} times. Time taken : ${timeTaken} seconds`, 2000);
        backupVariables.lastTime = timeTaken;
    }
    if (selectionValue === 'Heap-sort') {
        heapSort(givenArray, givenArray.length);
    }
    if (selectionValue === 'Bubble-sort') {
        bubblesort(givenArray);
    }
    if (selectionValue === 'BFS') {
        console.log(selectionValue);


    }

    updateGraph(selectionValue, givenArray.length, backupVariables.lastTime);
    // console.log(lastIterationQueries.iterations.length, lastIterationQueries.iterations);
    console.log(givenArray);

    givenArray = [];


})

resultClearButton.addEventListener('click', () => {
    clear();
})

pageElements.floater.addEventListener('click', () => {
    deflate_floater();
})

pageElements.display_toggle.addEventListener('click', () => {
    if (!backupVariables.iterationShown) {
        iteration_toggle('show')
    } else {
        iteration_toggle('hide')
    }
})

pageElements.generationButton.addEventListener('click', () => {
    let number = pageElements.input_box.value;
    number = number.split(',');
    console.log(number);

    let tempString = '';
    for (let it = 0; it < number[0]; it++) {
        tempString += generateRandomNumber(number[1]);
        if (it + 1 != number[0]) {
            tempString += ",";
        }
    }
    document.getElementById(`input`).value = tempString;
})