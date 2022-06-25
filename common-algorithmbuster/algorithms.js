function selectionSort(input, originalInput) {
  let arrayLength = input.length;
  let outerIndex, innerIndex, minimum_index;

  for (
    outerIndex = 0;
    outerIndex < arrayLength - 1;
    outerIndex++, backupVariables.globalteration++
  ) {
    minimum_index = outerIndex;
    let foundMinimum = minimum_index;
    for (
      innerIndex = outerIndex + 1;
      innerIndex < arrayLength;
      innerIndex++, backupVariables.globalteration++
    ) {
      if (input[innerIndex] < input[minimum_index]) {
        minimum_index = innerIndex;
        foundMinimum = minimum_index;
      }

      iterationPush(
        `Iteration no : ${backupVariables.globalteration}`,
        `Outer loop index : ${outerIndex} - [${input[outerIndex]}], Inner loop index : ${innerIndex} - [${input[innerIndex]}]`,
        `Found minimum at ${foundMinimum} - [${input[foundMinimum]}]`,
        `Current collection : ${input}`,
        `Original collection : ${originalInput}`
      );
    }
    innerIndex = arrayLength - 1;

    swap(input, minimum_index, outerIndex);
    iterationPush(
      `Iteration no : ${backupVariables.globalteration}`,
      `Outer loop index : ${outerIndex} - [${input[outerIndex]}], Inner loop index : ${innerIndex} - [${input[innerIndex]}]`,
      `📔 Swapping ${foundMinimum} with ${outerIndex}`,
      `Current collection : ${input}`,
      `Original collection : ${originalInput}`
    );
  }
  iterationPush(
    `Iterated : ${backupVariables.globalteration - 1} times.`,
    `Time taken : ${backupVariables.lastTime} seconds`,
    ``,
    `Current collection : ${input}`,
    `Original collection : ${originalInput}`
  );
}

function insertionsort(input, originalInput) {
  let arrayLength = input.length;
  let outerIndex, key, innerIndex;
  for (
    outerIndex = 1;
    outerIndex < arrayLength;
    outerIndex++, backupVariables.globalteration++
  ) {
    key = input[outerIndex];
    innerIndex = outerIndex - 1;

    while (innerIndex >= 0 && input[innerIndex] > key) {
      iterationPush(
        `Iteration No : ${backupVariables.globalteration}`,
        `Current key at : ${outerIndex} - [${key}]`,
        `Found larger and assigning predecessor at : ${innerIndex + 1} - [${
          input[innerIndex + 1]
        }] to ${innerIndex} - [${input[innerIndex]}]`,
        `Current collection : ${input}`,
        `Original collection : ${originalInput}`
      );
      input[innerIndex + 1] = input[innerIndex];
      innerIndex = innerIndex - 1;
      backupVariables.globalteration++;
    }
    iterationPush(
      `Iteration No : ${backupVariables.globalteration}`,
      `Current key at : ${outerIndex} - [${key}]`,
      `📔 Assigning predecessor to key at : ${innerIndex + 1} - [${
        input[innerIndex + 1]
      }]`,
      `Current collection : ${input}`,
      `Original collection : ${originalInput}`
    );
    input[innerIndex + 1] = key;
  }
  iterationPush(
    `Iterated : ${backupVariables.globalteration - 1} times.`,
    `Time taken : ${backupVariables.lastTime} seconds`,
    ``,
    `Current collection : ${input}`,
    `Original collection : ${originalInput}`
  );
}

function mergesort(array, begin, end, originalInput) {
  if (begin >= end) return;

  iterationPush(
    `Iteration No : ${backupVariables.globalteration}`,
    `Current begin : ${begin}`,
    `Current end : ${end}`,
    `Current collection : ${array.slice(begin, end + 1)}`,
    `Original collection : ${originalInput}`
  );
  backupVariables.globalteration++;
  let mid = Math.floor(begin + (end - begin) / 2);
  mergesort(array, begin, mid, originalInput);
  mergesort(array, mid + 1, end, originalInput);
  iterationPush(
    `Entering merge at Iteration No : ${backupVariables.globalteration}`,
    `Current begin : ${begin}`,
    `Current end : ${end}`,
    `Current collection :${array.slice(begin, end + 1)}`,
    `Original collection : ${originalInput}`
  );
  merge(array, begin, mid, end, originalInput);
}

function bubblesort(input, originalInput) {
  let arrayLength = input.length;
  let outerIndex, innerIndex;
  let smaller;

  for (
    outerIndex = 0;
    outerIndex < arrayLength - 1;
    outerIndex++, backupVariables.globalteration++
  ) {
    for (
      innerIndex = 0;
      innerIndex < arrayLength - outerIndex - 1;
      innerIndex++, backupVariables.globalteration++
    ) {
      smaller = innerIndex;
      if (input[innerIndex] > input[innerIndex + 1]) {
        iterationPush(
          `Iteration no : ${backupVariables.globalteration}`,
          `Outer loop index : ${outerIndex} - [${input[outerIndex]}], Inner loop index : ${innerIndex} - [${input[innerIndex]}]`,
          `Swapping ${innerIndex} - [${input[innerIndex]}] with ${
            innerIndex + 1
          } - [${input[innerIndex + 1]}]`,
          `Current collection : ${input}`,
          `Original collection : ${originalInput}`
        );
        swap(input, innerIndex, innerIndex + 1);
        smaller = innerIndex + 1;
      }
      iterationPush(
        `Iteration no : ${backupVariables.globalteration}`,
        `Outer loop index : ${outerIndex} - [${input[outerIndex]}], Inner loop index : ${innerIndex} - [${input[innerIndex]}]`,
        `Smaller at ${smaller} - [${input[smaller]}]`,
        `Current collection : ${input}`,
        `Original collection : ${originalInput}`
      );
    }
    iterationPush(
      `Iteration no : ${backupVariables.globalteration}`,
      `Outer loop index : ${outerIndex} - [${input[outerIndex]}], Inner loop index : ${innerIndex} - [${input[innerIndex]}]`,
      `Loop for first ${input[outerIndex]} element complete`,
      `Current collection : ${input}`,
      `Original collection : ${originalInput}`
    );
  }
  iterationPush(
    `Iterated : ${backupVariables.globalteration - 1} times.`,
    `Time taken : ${backupVariables.lastTime} seconds`,
    ``,
    `Current collection : ${input}`,
    `Original collection : ${originalInput}`
  );
}

function quickSort(arr, low, high, originalInput) {
  if (low < high) {
    iterationPush(
      `Iteration no : ${backupVariables.globalteration}`,
      `Current high ; ${high}, Current low : ${low}`,
      ``,
      `Current collection : ${arr}`,
      `Original collection : ${originalInput}`
    );
    let pi = partition(arr, low, high, originalInput);
    backupVariables.globalteration++;
    quickSort(arr, low, pi - 1, originalInput);
    quickSort(arr, pi + 1, high, originalInput);
  }
}

function heapSort(input, arrayLength, originalInput) {
  for (
    let outerIndex = Math.floor(arrayLength / 2 - 1);
    outerIndex >= 0;
    outerIndex--, backupVariables.globalteration++
  ) {
    iterationPush(
      `Iteration No : ${backupVariables.globalteration} times.`,
      `Entering heapify with length ${arrayLength} , middle point ${outerIndex} `,
      ``,
      `Current collection : ${input}`,
      `Original collection : ${originalInput}`
    );
    heapify(input, arrayLength, outerIndex, originalInput);
  }

  for (let outerIndex = arrayLength - 1; outerIndex > 0; outerIndex--) {
    swap(input, 0, outerIndex);

    heapify(input, outerIndex, 0, originalInput);
  }
  iterationPush(
    `Iterated : ${backupVariables.globalteration - 1} times.`,
    `Time taken : ${backupVariables.lastTime} seconds`,
    ``,
    `Current collection : ${input}`,
    `Original collection : ${originalInput}`
  );
}

function binarySearch(arr, start, end, target, context) {
  if (context === "") {
    if (end >= start) {
      let mid = Math.floor(start + (end - start) / 2);

      if (arr[mid] === target) return true;

      if (arr[mid] > target)
        return binarySearch(arr, start, mid - 1, target, "");

      return binarySearch(arr, mid + 1, end, target, "");
    }
    return false;
  } else {
    if (end >= start) {
      let mid = Math.floor(start + (end - start) / 2);
      backupVariables.globalteration++;
      iterationPush(
        `Iteration: ${backupVariables.globalteration}, Current mid : ${mid}`,
        `Current start : ${start}, current end : ${end}`,
        ``,
        ``,
        ``
      );

      if (arr[mid] === target) {
        console.log(mid);

        return mid;
      }

      if (arr[mid] > target)
        return binarySearch(arr, start, mid - 1, target, "s");

      return binarySearch(arr, mid + 1, end, target, "s");
    }
    return false;
  }
}

function exponentiationBySquaring(base, exponent, primeModulo) {
  let temporaryMarker = 1;

  while (exponent > 0) {
    if (exponent % 2 !== 0) {
      temporaryMarker = (temporaryMarker * base) % primeModulo;
    }

    base = (base * base) % primeModulo;
    exponent = Math.floor(exponent / 2);
    console.log(base, exponent, temporaryMarker, temporaryMarker % primeModulo);
    backupVariables.globalteration++;
  }
  return temporaryMarker % primeModulo;
}

function BFS() {
  let currentNode = currentGraphInfo.currentArrayState.pop();
  currentGraphInfo.graphRelations[currentNode].forEach((element) => {
    if (currentGraphInfo.visitState[element] === -1) {
      currentGraphInfo.visitState[element] =
        currentGraphInfo.visitState[currentNode] + 1;
      currentGraphInfo.currentArrayState.push(element);
      currentGraphInfo.iterationSerial.push(element);

      iterationPush(
        `Iteration: ${backupVariables.globalteration} :`,
        `Current Node : ${currentNode}`,
        ``,
        `Current Adjacents : ${printSet(
          currentGraphInfo.graphRelations[currentNode]
        )}`,
        `Iterating on adjacent : ${element}`
      );
    } else {
      iterationPush(
        `Iteration: ${backupVariables.globalteration} :`,
        `Current Node : ${currentNode}`,
        ``,
        `Current Adjacents : ${printSet(
          currentGraphInfo.graphRelations[currentNode]
        )}`,
        `Tried to visit already visited : ${element}`
      );
    }
  });
  if (currentGraphInfo.currentArrayState.length <= 0) {
    return;
  }
  backupVariables.globalteration++;
  BFS();
}

function DFS(currentSource, parent) {
  iterationPush(
    `Iteration: ${backupVariables.globalteration} :`,
    `Current Node : ${currentSource}`,
    ``,
    `Current Adjacents : ${printSet(
      currentGraphInfo.graphRelations[currentSource]
    )}`,
    ``
  );
  currentGraphInfo.tsSortstartTime[currentSource] = currentGraphInfo.timeVar++;
  backupVariables.globalteration++;

  currentGraphInfo.graphRelations[currentSource].forEach((element) => {
    let currentAdjacent = element;
    if (currentGraphInfo.visitState[currentAdjacent] === -1) {
      currentGraphInfo.visitState[currentAdjacent] = 1;
      currentGraphInfo.iterationSerial.push(currentSource);
      DFS(currentAdjacent, currentSource);
    } else if (
      currentAdjacent !== parent &&
      currentGraphInfo.visitState[currentAdjacent] !== 2
    ) {
      currentGraphInfo.cycles++;
      iterationPush(
        `Iteration: ${backupVariables.globalteration} :`,
        `Current Node : ${currentSource}`,
        ``,
        `Current Adjacents : ${printSet(
          currentGraphInfo.graphRelations[currentSource]
        )}`,
        `Tried to visit already visited : ${currentAdjacent}`
      );
    }
  });

  currentGraphInfo.visitState[currentSource] = 2;
  currentGraphInfo.tsSortendTime[currentSource] = currentGraphInfo.timeVar++;
}

function Dijkstra(target) {
  while (!currentGraphInfo.priorityQueue.isEmpty()) {
    let currentNode = +currentGraphInfo.priorityQueue.front().element;

    currentGraphInfo.priorityQueue.remove();
    if (currentNode === target) break;
    currentGraphInfo.graphRelations[currentNode].forEach((element, index) => {
      let neighborNode = +element;
      let weightToNode = +currentGraphInfo.weights[currentNode][index];
      log(
        "visitstate : ",
        currentGraphInfo.visitState[currentNode],
        weightToNode,
        currentGraphInfo.visitState[neighborNode]
      );
      if (
        currentGraphInfo.visitState[currentNode] + weightToNode <
        currentGraphInfo.visitState[neighborNode]
      ) {
        currentGraphInfo.visitState[neighborNode] =
          currentGraphInfo.visitState[currentNode] + weightToNode;
        currentGraphInfo.priorityQueue.push(
          neighborNode,
          currentGraphInfo.visitState[neighborNode]
        );
        iterationPush(
          `Iteration: ${backupVariables.globalteration++} :`,
          `Current Node : ${currentNode}`,
          ``,
          `Current Adjacents : ${printSet(
            currentGraphInfo.graphRelations[currentNode]
          )}`,
          `Final distance of neighbor ${neighborNode} from source is ${currentGraphInfo.visitState[neighborNode]}`
        );
      } else {
        iterationPush(
          `Iteration: ${backupVariables.globalteration++} :`,
          `Current Node : ${currentNode}`,
          ``,
          `Current Adjacents : ${printSet(
            currentGraphInfo.graphRelations[currentNode]
          )}`,
          `Tried to visit already visited ${neighborNode}`
        );
      }
    });
  }
}
