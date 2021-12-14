function selectionSort(input) {
    timer('start');

    let originalInput = [];
    originalInput += input;
    let iterationNo = 1;
    let n = input.length;
    let i, j, min_idx;

    for (i = 0; i < n - 1; i++, iterationNo++) {

        min_idx = i;
        let foundMinimum = min_idx;
        for (j = i + 1; j < n; j++, iterationNo++) {
            if (input[j] < input[min_idx]) {
                min_idx = j;
                foundMinimum = min_idx;
            }

            iterationPush(`Iteration no : ${iterationNo}`, `Outer loop index : ${i} - [${input[i]}], Inner loop index : ${j} - [${input[j]}]`, `Found minimum at ${foundMinimum} - [${input[foundMinimum]}]`, `Current collection : ${input}`, `Original collection : ${originalInput}`)
        }
        j = n - 1;

        swap(input, min_idx, i);
        iterationPush(`Iteration no : ${iterationNo}`, `Outer loop index : ${i} - [${input[i]}], Inner loop index : ${j} - [${input[j]}]`, `📔 Swapping ${foundMinimum} with ${i}`, `Current collection : ${input}`, `Original collection : ${originalInput}`)

    }

    const timeTaken = timer('stop');
    iterationPush(`Iterated : ${iterationNo-1} times.`, `Time taken : ${timeTaken} seconds`, ``, `Current collection : ${input}`, `Original collection : ${originalInput}`)
    invoke_floater('left:10px;top:20px', `Iterated : ${iterationNo-1} times. Time taken : ${timeTaken} seconds`, 2000);
    backupVariables.lastTime = timeTaken;
}


function insertionsort(input) {
    timer('start');
    let originalInput = [];
    originalInput += input;
    let n = input.length;
    let i, key, j, iterationNo = 1;
    for (i = 1; i < n; i++, iterationNo++) {
        key = input[i];
        j = i - 1;

        while (j >= 0 && input[j] > key) {
            iterationPush(`Iteration No : ${iterationNo}`, `Current key at : ${i} - [${key}]`, `Found larger and assigning predecessor at : ${j+1} - [${input[j+1]}] to ${j} - [${input[j]}]`, `Current collection : ${input}`, `Original collection : ${originalInput}`)
            input[j + 1] = input[j];
            j = j - 1;
            iterationNo++
        }
        iterationPush(`Iteration No : ${iterationNo}`, `Current key at : ${i} - [${key}]`, `📔 Assigning predecessor to key at : ${j+1} - [${input[j+1]}]`, `Current collection : ${input}`, `Original collection : ${originalInput}`)
        input[j + 1] = key;

    }
    const timeTaken = timer('stop');
    iterationPush(`Iterated : ${iterationNo-1} times.`, `Time taken : ${timeTaken} seconds`, ``, `Current collection : ${input}`, `Original collection : ${originalInput}`)
    invoke_floater('left:10px;top:20px', `Iterated : ${iterationNo-1} times. Time taken : ${timeTaken} seconds`, 2000);
    backupVariables.lastTime = timeTaken;
}

function mergesort(array, begin, end, originalInput) {
    if (begin >= end)
        return;

    iterationPush(`Iteration No : ${backupVariables.globalteration}`, `Current begin : ${begin}`, `Current end : ${end}`, `Current collection : ${array.slice(begin,end+1)}`, `Original collection : ${originalInput}`)
    backupVariables.globalteration++;
    let mid = Math.floor(begin + (end - begin) / 2);
    mergesort(array, begin, mid, originalInput);
    mergesort(array, mid + 1, end, originalInput);
    iterationPush(`Entering merge at Iteration No : ${backupVariables.globalteration}`, `Current begin : ${begin}`, `Current end : ${end}`, `Current collection :${array.slice(begin,end+1)}`, `Original collection : ${originalInput}`);
    merge(array, begin, mid, end, originalInput);
}

function bubblesort(input) {
    timer('start');
    let iterationNo = 1,
        n = input.length;
    let originalInput = [];
    originalInput += input;
    let i, j;
    let smaller;

    for (i = 0; i < n - 1; i++, iterationNo++) {
        for (j = 0; j < n - i - 1; j++, iterationNo++) {
            smaller = j;
            if (input[j] > input[j + 1]) {
                iterationPush(`Iteration no : ${iterationNo}`, `Outer loop index : ${i} - [${input[i]}], Inner loop index : ${j} - [${input[j]}]`, `Swapping ${j} - [${input[j]}] with ${j+1} - [${input[j+1]}]`, `Current collection : ${input}`, `Original collection : ${originalInput}`);
                swap(input, j, j + 1);
                smaller = j + 1;
            }
            iterationPush(`Iteration no : ${iterationNo}`, `Outer loop index : ${i} - [${input[i]}], Inner loop index : ${j} - [${input[j]}]`, `Smaller at ${smaller} - [${input[smaller]}]`, `Current collection : ${input}`, `Original collection : ${originalInput}`);
        }
        iterationPush(`Iteration no : ${iterationNo}`, `Outer loop index : ${i} - [${input[i]}], Inner loop index : ${j} - [${input[j]}]`, `Loop for first ${input[i]} element complete`, `Current collection : ${input}`, `Original collection : ${originalInput}`);
    }
    const timeTaken = timer('stop');
    iterationPush(`Iterated : ${iterationNo-1} times.`, `Time taken : ${timeTaken} seconds`, ``, `Current collection : ${input}`, `Original collection : ${originalInput}`)
    invoke_floater('left:10px;top:20px', `Iterated : ${iterationNo-1} times. Time taken : ${timeTaken} seconds`, 2000);
    backupVariables.lastTime = timeTaken;
}

function quickSort(arr, low, high, originalInput) {
    if (low < high) {
        iterationPush(`Iteration no : ${backupVariables.globalteration}`, `Current high ; ${high}, Current low : ${low}`, ``, `Current collection : ${arr}`, `Original collection : ${originalInput}`);
        let pi = partition(arr, low, high, originalInput);
        backupVariables.globalteration++;
        quickSort(arr, low, pi - 1, originalInput);
        quickSort(arr, pi + 1, high, originalInput);
    }
}

function heapSort(input, n) {
    let originalInput = [];
    originalInput += input;
    timer('start');
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--, backupVariables.globalteration++) {
        iterationPush(`Iteration No : ${backupVariables.globalteration} times.`, `Entering heapify with length ${n} , middle point ${i} `, ``, `Current collection : ${input}`, `Original collection : ${originalInput}`)
        heapify(input, n, i, originalInput);
    }

    for (let i = n - 1; i > 0; i--) {
        swap(input, 0, i);

        heapify(input, i, 0, originalInput);
    }
    const timeTaken = timer('stop');
    iterationPush(`Iterated : ${backupVariables.globalteration-1} times.`, `Time taken : ${timeTaken} seconds`, ``, `Current collection : ${input}`, `Original collection : ${originalInput}`)
    invoke_floater('left:10px;top:20px', `Iterated : ${backupVariables.globalteration-1} times. Time taken : ${timeTaken} seconds`, 2000);
    backupVariables.lastTime = timeTaken;
}

function BFS() {
    let currentNode = currentGraphInfo.currentArrayState.pop();
    console.log(`Adjacents of ${currentNode} : `, currentGraphInfo.graphRelations[currentNode]);
    currentGraphInfo.graphRelations[currentNode].forEach(element => {
        if (currentGraphInfo.visitState[element] === undefined) {
            currentGraphInfo.visitState[element] = currentGraphInfo.visitState[currentNode] + 1;
            currentGraphInfo.currentArrayState.push(element)
            console.log(currentGraphInfo.visitState[element], currentGraphInfo.visitState[currentNode], currentGraphInfo.currentArrayState);

            iterationPush(`Iteration: ${backupVariables.globalteration} :`, `Current Node : ${currentNode}`, ``, `Current Adjacents : ${ currentGraphInfo.graphRelations[currentNode]}`, `Iterating on adjacent : ${element}`)
        }

    });
    if (currentGraphInfo.currentArrayState.length <= 0) {
        invoke_floater('left:10px;top:20px', `Iterated : ${backupVariables.globalteration-1} times.`, 2000);
        return;
    }
    backupVariables.globalteration++;
    BFS();
}