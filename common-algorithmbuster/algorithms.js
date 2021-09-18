function selectionSort(input) {
    // console.log(input);

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

            iterationView(iterationNo, `Outer loop index : ${i} - [${input[i]}], Inner loop index : ${j} - [${input[j]}]`, `Found minimum at ${foundMinimum}`, input, originalInput)
        }

        let temp = input[min_idx];
        input[min_idx] = input[i];
        input[i] = temp;
        iterationView(iterationNo, `Outer loop index : ${i} - [${input[i]}], Inner loop index : ${j} - [${input[j]}]`, `📔 Swapping ${foundMinimum} with ${i}`, input, originalInput)

    }

    console.log(input);
}