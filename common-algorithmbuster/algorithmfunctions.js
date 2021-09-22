// all codes taken from geekFromGeeks
function merge(array, left, mid, right, originalInput) {
    let subArrayOne = mid - left + 1;
    let subArrayTwo = right - mid;

    // Create temp arrays
    let leftArray = [],
        rightArray = [];

    // Copy data to temp arrays leftArray[] and rightArray[]
    for (let i = 0; i < subArrayOne; i++)
        leftArray[i] = array[left + i];

    for (let j = 0; j < subArrayTwo; j++)
        rightArray[j] = array[mid + 1 + j];

    let indexOfSubArrayOne = 0, // Initial index of first sub-array
        indexOfSubArrayTwo = 0; // Initial index of second sub-array
    let indexOfMergedArray = left; // Initial index of merged array

    // Merge the temp arrays back leto array[left..right]
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
    // Copy the remaining elements of
    // left[], if there are any
    while (indexOfSubArrayOne < subArrayOne) {
        array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];
        iterationPush(`Merging left at Iteration No : ${backupVariables.globalteration}`, `${indexOfMergedArray} - [${array[indexOfMergedArray]}] to ${indexOfSubArrayOne} - [${leftArray[indexOfSubArrayOne]}]`, `Subarray : ${subArrayOne}`, `Current collection :${array}`, `Original collection : ${originalInput}`);
        indexOfSubArrayOne++;
        indexOfMergedArray++;
    }
    // Copy the remaining elements of
    // right[], if there are any
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
    let pivot = arr[high]; // pivot 
    iterationPush(`Entered partition at iteration No : ${backupVariables.globalteration}`, `Current pivot : ${pivot}`, `Current high ; ${high}, Current low : ${low}`, `Current collection : ${arr}`, `Original collection : ${originalInput}`);
    let i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far

    for (let j = low; j <= high - 1; j++, backupVariables.globalteration++) {
        // If current element is smaller than the pivot 
        if (arr[j] < pivot) {
            i++; // increment index of smaller element
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
    largest = i; // Initialize largest as root
    l = 2 * i + 1; // left = 2*i + 1
    r = 2 * i + 2; // right = 2*i + 2
    iterationPush(`Entered heapify at Iteration No : ${backupVariables.globalteration}`, `largest : ${largest} - [${arr[largest]}], left : ${l} - [${arr[l]}], right : ${r} - [${arr[r]}]`, ``, `Current collection : ${arr}`, `Original collection : ${originalInput}`)

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest]) {
        iterationPush(`heapify at Iteration No : ${backupVariables.globalteration}`, `largest: ${largest} - [${arr[largest]}], left : ${l} - [${arr[l]}], right : ${r} - [${arr[r]}]`, `${l} - [${arr[l]}] is larger than ${largest} - [${arr[largest]}] or ${l} < ${n} `, `Current collection : ${arr}`, `Original collection : ${originalInput}`)
        largest = l;
    }

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest]) {
        iterationPush(`heapify at Iteration No : ${backupVariables.globalteration}`, `largest: ${largest} - [${arr[largest]}], left : ${l} - [${arr[l]}], right : ${r} - [${arr[r]}]`, `${r} - [${arr[r]}] is larger than ${largest} - [${arr[largest]}] or ${r} < ${n} `, `Current collection : ${arr}`, `Original collection : ${originalInput}`)
        largest = r;
    }

    // If largest is not root
    if (largest != i) {
        iterationPush(`heapify at Iteration No : ${backupVariables.globalteration}`, `largest: ${largest} - [${arr[largest]}], left : ${l} - [${arr[l]}], right : ${r} - [${arr[r]}]`, `${largest} is not root ${i}, swapping ${i} - [${arr[i]}] with ${largest} - [${arr[largest]}] `, `Current collection : ${arr}`, `Original collection : ${originalInput}`)
        swap(arr, i, largest);

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest, originalInput);
    }
    backupVariables.globalteration++;
}

function swap(input, xp, yp) {
    temp = input[xp];
    input[xp] = input[yp];
    input[yp] = temp;
}