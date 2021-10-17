function swap(input, xp, yp) {
    temp = input[xp];
    input[xp] = input[yp];
    input[yp] = temp;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {

        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function binarySearch(arr, start, end, target) {
    // console.log(arr, start, end, target);

    if (end >= start) {
        let mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] === target) return mid;

        if (arr[mid] > target) return binarySearch(arr, start, mid - 1, target)

        return binarySearch(arr, mid + 1, end, target)
    }
    return false;
}