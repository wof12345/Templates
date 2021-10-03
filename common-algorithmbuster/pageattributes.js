const executionButton = document.querySelector(`.start_execution`);
const resultClearButton = document.querySelector(`.clear`);

pageElements.choice.addEventListener('change', () => {
    setInfo(getInfo(pageElements.choice.value));
})

executionButton.addEventListener('click', () => {
    clear();

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