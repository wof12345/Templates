function merge(array, left, mid, right, originalInput) {
    let subArrayOne = mid - left + 1;
    let subArrayTwo = right - mid;

    let leftArray = [],
        rightArray = [];

    for (let i = 0; i < subArrayOne; i++)
        leftArray[i] = array[left + i];

    for (let j = 0; j < subArrayTwo; j++)
        rightArray[j] = array[mid + 1 + j];

    let indexOfSubArrayOne = 0,
        indexOfSubArrayTwo = 0;
    let indexOfMergedArray = left;

    while (indexOfSubArrayOne < subArrayOne && indexOfSubArrayTwo < subArrayTwo) {
        iterationPush(`Merge main loop at Iteration No : ${backupVariables.globalteration}`, `Current left : ${left} , Current right : ${right}, Current mid : ${mid}`, `${indexOfSubArrayOne} - [${leftArray[indexOfSubArrayOne]}], ${indexOfSubArrayTwo} - [${leftArray[indexOfSubArrayTwo]}], ${indexOfMergedArray} - [${array[indexOfMergedArray]}]`, `Left array : ${leftArray}, Right array : ${rightArray}, Current collection :${array}`, `Original collection : ${originalInput}`);
        if (leftArray[indexOfSubArrayOne] <= rightArray[indexOfSubArrayTwo]) {
            array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];
            indexOfSubArrayOne++;
        } else {
            array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];
            indexOfSubArrayTwo++;
        }
        indexOfMergedArray++;
        backupVariables.globalteration++;
    }

    while (indexOfSubArrayOne < subArrayOne) {
        array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];
        iterationPush(`Merging left at Iteration No : ${backupVariables.globalteration}`, `${indexOfMergedArray} - [${array[indexOfMergedArray]}] to ${indexOfSubArrayOne} - [${leftArray[indexOfSubArrayOne]}]`, `Subarray : ${subArrayOne}`, `Current collection :${array}`, `Original collection : ${originalInput}`);
        indexOfSubArrayOne++;
        indexOfMergedArray++;
    }

    while (indexOfSubArrayTwo < subArrayTwo) {
        array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];
        iterationPush(`Merging right at Iteration No : ${backupVariables.globalteration}`, `${indexOfMergedArray} - ${array[indexOfMergedArray]} to ${indexOfSubArrayTwo} - ${rightArray[indexOfSubArrayTwo]}`, `Subarray : ${subArrayTwo}`, `Current collection :${array}`, `Original collection : ${originalInput}`);
        indexOfSubArrayTwo++;
        indexOfMergedArray++;
    }
    iterationPush(`Merge at Iteration No : ${backupVariables.globalteration}`, `Current left : ${left} , Current right : ${right}`, `Current mid : ${mid}`, `Current collection :${array}`, `Original collection : ${originalInput}`);
    backupVariables.globalteration++;
}

function partition(arr, low, high, originalInput) {
    let pivot = arr[high];
    iterationPush(`Entered partition at iteration No : ${backupVariables.globalteration}`, `Current pivot : ${pivot}`, `Current high ; ${high}, Current low : ${low}`, `Current collection : ${arr}`, `Original collection : ${originalInput}`);
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++, backupVariables.globalteration++) {

        if (arr[j] < pivot) {
            i++;
            iterationPush(`Inner loop of partition at iteration No : ${backupVariables.globalteration}`, `Current pivot : ${pivot}, Current high ; ${high}, Current low : ${low}`, `${i} - [${arr[i]}] is less than pivot - [${pivot}], swapping ${i} - [${arr[i]}] with ${j} - [${arr[j]}]`, `Current collection : ${arr}`, `Original collection : ${originalInput}`);
            swap(arr, i, j);
        }
        iterationPush(`Inner loop of partition at iteration No : ${backupVariables.globalteration}`, `Current pivot : ${pivot}, Current high ; ${high}, Current low : ${low}`, `Current right position of pivot - [${pivot}] is ${i} - [${arr[i]}]`, `Current collection : ${arr}`, `Original collection : ${originalInput}`);
    }
    iterationPush(`End of partition at iteration No : ${backupVariables.globalteration}`, `Current pivot : ${pivot}, Current high ; ${high}, Current low : ${low}`, `Swapping ${i+1} - [${arr[i+1]}] with ${high} - [${arr[high]}] `, `Current collection : ${arr}`, `Original collection : ${originalInput}`);
    swap(arr, i + 1, high);
    backupVariables.globalteration++;
    return (i + 1);
}

function heapify(arr, n, i, originalInput) {
    largest = i;
    l = 2 * i + 1;
    r = 2 * i + 2;
    iterationPush(`Entered heapify at Iteration No : ${backupVariables.globalteration}`, `largest : ${largest} - [${arr[largest]}], left : ${l} - [${arr[l]}], right : ${r} - [${arr[r]}]`, ``, `Current collection : ${arr}`, `Original collection : ${originalInput}`)

    if (l < n && arr[l] > arr[largest]) {
        iterationPush(`heapify at Iteration No : ${backupVariables.globalteration}`, `largest: ${largest} - [${arr[largest]}], left : ${l} - [${arr[l]}], right : ${r} - [${arr[r]}]`, `${l} - [${arr[l]}] is larger than ${largest} - [${arr[largest]}] or ${l} < ${n} `, `Current collection : ${arr}`, `Original collection : ${originalInput}`)
        largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
        iterationPush(`heapify at Iteration No : ${backupVariables.globalteration}`, `largest: ${largest} - [${arr[largest]}], left : ${l} - [${arr[l]}], right : ${r} - [${arr[r]}]`, `${r} - [${arr[r]}] is larger than ${largest} - [${arr[largest]}] or ${r} < ${n} `, `Current collection : ${arr}`, `Original collection : ${originalInput}`)
        largest = r;
    }

    if (largest != i) {
        iterationPush(`heapify at Iteration No : ${backupVariables.globalteration}`, `largest: ${largest} - [${arr[largest]}], left : ${l} - [${arr[l]}], right : ${r} - [${arr[r]}]`, `${largest} is not root ${i}, swapping ${i} - [${arr[i]}] with ${largest} - [${arr[largest]}] `, `Current collection : ${arr}`, `Original collection : ${originalInput}`)
        swap(arr, i, largest);

        heapify(arr, n, largest, originalInput);
    }
    backupVariables.globalteration++;
}

function swap(input, xp, yp) {
    temp = input[xp];
    input[xp] = input[yp];
    input[yp] = temp;
}