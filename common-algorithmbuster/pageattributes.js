const executionButton = document.querySelector(`.start_execution`);
const resultClearButton = document.querySelector(`.clear`);
const mainText = document.querySelector(`.main_text`);
const generatorCont = document.querySelector(`.input_gen_cont`);
let selectionValue = document.getElementById(`choice`).value;
// console.log(mainText);


pageElements.choice.addEventListener('change', () => {
    setInfo(getInfo(pageElements.choice.value));
    selectionValue = document.getElementById(`choice`).value;
    mainText.textContent = 'Input for the algorithm (If array, elements should be seperated by ",". Note that iterations are not balanced :)';
    if (selectionValue === 'BFS' || selectionValue === 'DFS' || selectionValue === 'Dijkstra') {
        console.log(selectionValue);
        generatorCont.style.display = 'none';
        mainText.textContent = 'Input should be seperated by space and comma. E.g. (2 3,4 5,6 7). Note that first line only represents the number of nodes and edges. Eliminating input should be a single  node denoting the source.'
    } else {
        generatorCont.style.display = '';
        mainText.textContent = 'Input for the algorithm (If array, elements should be seperated by ",". Note that iterations are not balanced :)';
    }
})

executionButton.addEventListener('click', () => {
    clear();
    mainText.textContent = 'Input for the algorithm (If array, elements should be seperated by ",". Note that iterations are not balanced :)';

    const selectionValue = document.getElementById(`choice`).value;
    let input = document.getElementById(`input`).value;
    let givenArray = input.split(',');
    // console.log(givenArray);


    if (selectionValue !== 'BFS' && selectionValue !== 'DFS' && selectionValue !== 'Dijkstra') {
        givenarray = numberify(givenArray);
    }
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
        // console.log(givenArray);
        processGraph(givenArray);

        timer('start');
        BFS();
        backupVariables.lastTime = timer('stop');
        currentGraphInfo.visitState.sort((a, b) => a - b);
        console.log(currentGraphInfo.iterationSerial);

        console.log(currentGraphInfo.visitState);
        // console.log('Nodes and edges : ', currentGraphInfoEN);
    }
    if (selectionValue === 'DFS') {
        console.log(selectionValue);
        processGraph(givenArray);

        timer('start');
        DFS(currentGraphInfo.source, -1);
        backupVariables.lastTime = timer('stop');
        console.log(currentGraphInfo.tsSortstartTime);
        console.log(currentGraphInfo.tsSortendTime);
        // console.log('Nodes and edges : ', currentGraphInfoEN);
        invoke_floater('left:10px;top:20px', `Iterated : ${backupVariables.globalteration-1} times. There are ${currentGraphInfo.cycles} cycles in this graph.`, 2000);


    }

    resetGraphInfo();
    updateGraph(selectionValue, givenArray.length, backupVariables.lastTime);
    // console.log(lastIterationQueries.iterations.length, lastIterationQueries.iterations);
    // console.log(givenArray);



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