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
//3 4 5 6 8
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

function Dijkstra(target) {

    if (currentGridInfo.pqForPathfinding.isEmpty()) {
        return;
    }
    // console.log(`PQ elements : `, currentGridInfo.pqForPathfinding.printPQueue());
    let currentNode = +currentGridInfo.pqForPathfinding.front().element;
    driverFunction(currentNode);
    currentGridInfo.pqForPathfinding.remove();
    if (currentNode == target) {
        algorithmEndingAction(target);
        return;
    }
    for (let i = 0; i < currentGridInfo.gridToNodeRelations[currentNode].length; i++) {
        let neighborNode = +currentGridInfo.gridToNodeRelations[currentNode][i];
        let weightToNode = +currentGridInfo.gridToNodeWeights[currentNode][i];
        illuminatePath('', [currentNode], 'rgb(255, 255, 255)')
            // console.log('Current Node:', currentNode);
            // console.log('neighbor and weight : ', neighborNode, weightToNode);
            // console.log('visitstate : ', currentGridInfo.gridToNodeDistanceFromSource[currentNode], weightToNode, currentGridInfo.gridToNodeDistanceFromSource[neighborNode]);
        if (currentGridInfo.gridToNodeDistanceFromSource[currentNode] + weightToNode < currentGridInfo.gridToNodeDistanceFromSource[neighborNode] && !binarySearch(blockades, 0, blockades.length - 1, neighborNode)) {
            // console.log(`Visitstate of ${neighborNode} before sum : ${currentGridInfo.gridToNodeDistanceFromSource[neighborNode]}`);
            currentGridInfo.gridToNodeDistanceFromSource[neighborNode] = currentGridInfo.gridToNodeDistanceFromSource[currentNode] + weightToNode;
            currentGridInfo.pqForPathfinding.push(neighborNode, currentGridInfo.gridToNodeDistanceFromSource[neighborNode]);
            currentGridInfo.parentNode[neighborNode] = currentNode;
            // console.log(`Visitstate of ${neighborNode} after sum : ${currentGridInfo.gridToNodeDistanceFromSource[neighborNode]}`);
            // console.log(`node ${currentNode}th process : `, currentGridInfo.gridToNodeDistanceFromSource[neighborNode]);
        } else {
            // console.log(`Visitstate of ${neighborNode} after sum : ${currentGridInfo.gridToNodeDistanceFromSource[neighborNode]}`);
            // console.log(`Tried to visit ${currentNode}, neighbor ${neighborNode}`);

        }
    }
    // return;
    setTimeout(() => {
        currentGridInfo.gridToNodeLevel[currentNode] = currentGridInfo.gridToNodeLevel[currentNode]++;
        currentGridInfo.closedNode.push(currentNode);
        Dijkstra(target);
    }, 1)
}