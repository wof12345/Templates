function selectionSort(input) {
    // console.log(input);
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

            iterationView(`Iteration no : ${iterationNo}`, `Outer loop index : ${i} - [${input[i]}], Inner loop index : ${j} - [${input[j]}]`, `Found minimum at ${foundMinimum} - [${input[foundMinimum]}]`, `Current collection : ${input}`, `Original collection : ${originalInput}`)
        }
        j = n - 1;

        let temp = input[min_idx];
        input[min_idx] = input[i];
        input[i] = temp;
        iterationView(`Iteration no : ${iterationNo}`, `Outer loop index : ${i} - [${input[i]}], Inner loop index : ${j} - [${input[j]}]`, `📔 Swapping ${foundMinimum} with ${i}`, `Current collection : ${input}`, `Original collection : ${originalInput}`)

    }

    const timeTaken = timer('stop');
    iterationView(`Iterated : ${iterationNo-1} times.`, `Time taken : ${timeTaken} seconds`, ``, `Current collection : ${input}`, `Original collection : ${originalInput}`)
    invoke_floater('left:10px;top:20px', `Iterated : ${iterationNo-1} times. Time taken : ${timeTaken} seconds`, 2000)
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
            input[j + 1] = input[j];
            iterationView(`Iteration No : ${iterationNo}`, `Current key at : ${i} - [${key}]`, `Comparing with predecessor at : ${j} - [${input[j]}]`, `Current collection : ${input}`, `Original collection : ${originalInput}`)
            j = j - 1;
            iterationNo++
        }
        input[j + 1] = key;
        iterationView(`Iteration No : ${iterationNo}`, `Current key at : ${i} - [${key}]`, `📔 Assigning predecessor to key at : ${j+1} - [${input[j+1]}]`, `Current collection : ${input}`, `Original collection : ${originalInput}`)
    }
    const timeTaken = timer('stop');
    iterationView(`Iterated : ${iterationNo-1} times.`, `Time taken : ${timeTaken} seconds`, ``, `Current collection : ${input}`, `Original collection : ${originalInput}`)
    invoke_floater('left:10px;top:20px', `Iterated : ${iterationNo-1} times. Time taken : ${timeTaken} seconds`, 2000)
}