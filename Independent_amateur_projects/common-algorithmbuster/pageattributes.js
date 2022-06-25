const executionButton = document.querySelector(`.start_execution`);
const resultClearButton = document.querySelector(`.clear`);
const mainText = document.querySelector(`.main_text`);
const generatorCont = document.querySelector(`.input_gen_cont`);
let selectionValue = document.getElementById(`choice`).value;
// console.log(mainText);

pageElements.choice.addEventListener("change", () => {
  setInfo(getInfo(pageElements.choice.value));
  selectionValue = document.getElementById(`choice`).value;
  usefulVariables.currentAlgorithm = selectionValue;
  pageElements.input_gen_cont.style = "";

  pageElements.floater_indicator.style = ` transform: rotate(180deg);`;
  pageLogics.floater_gen_shrunk = true;
  pageElements.input_gen_cont.style = `transform: translateX(270px);`;

  if (
    selectionValue === "BFS" ||
    selectionValue === "DFS" ||
    selectionValue === "Dijkstra"
  ) {
    console.log(selectionValue);
    pageElements.generation_guide.innerHTML = preDefinedText.genTextGraph;
    mainText.textContent = preDefinedText.inputTextGraph;
  } else if (selectionValue === "Binary-search") {
    pageElements.generation_guide.innerHTML = preDefinedText.genTextArray;
    mainText.textContent = preDefinedText.inputTextSearch;
  } else if (selectionValue === "Exponentiation by squaring") {
    pageElements.input_gen_cont.style = "display : none;";
    mainText.textContent = preDefinedText.inputTextSingleInput;
  } else {
    pageElements.generation_guide.innerHTML = preDefinedText.genTextArray;
    generatorCont.style.display = "";
    mainText.textContent = preDefinedText.inputTextArray;
  }
});

executionButton.addEventListener("click", () => {
  clear();
  mainText.textContent =
    'Input for the algorithm (If array, elements should be seperated by ",". Note that iterations are not balanced :)';

  const selectionValue = document.getElementById(`choice`).value;
  let input = document.getElementById(`input`).value;
  let givenArray = input.split(",");
  let singleValueInput = +givenArray[0];
  let singleValueInput1 = +givenArray[1];
  let currentValue = givenArray.length;
  let originalInput = [];
  originalInput += givenArray;

  if (
    selectionValue !== "BFS" &&
    selectionValue !== "DFS" &&
    selectionValue !== "Dijkstra"
  ) {
    givenArray = numberify(givenArray);
  }
  if (selectionValue === "Selection-sort") {
    timer("start");
    selectionSort(givenArray, originalInput);
    backupVariables.lastTime = timer("stop");
    invoke_floater(
      "left:10px;top:20px",
      `Iterated : ${backupVariables.globalteration - 1} times. Time taken : ${
        backupVariables.lastTime
      } seconds`,
      2000
    );
  }
  if (selectionValue === "Insertion-sort") {
    timer("start");
    insertionsort(givenArray, originalInput);
    backupVariables.lastTime = timer("stop");
    invoke_floater(
      "left:10px;top:20px",
      `Iterated : ${backupVariables.globalteration - 1} times. Time taken : ${
        backupVariables.lastTime
      } seconds`,
      2000
    );
  }
  if (selectionValue === "Merge-sort") {
    timer("start");
    mergesort(givenArray, 0, givenArray.length - 1, originalInput);
    iterationPush(
      `Iterated : ${backupVariables.globalteration - 1} times.`,
      `Time taken : ${backupVariables.lastTime} seconds`,
      ``,
      `Current collection : ${givenArray}`,
      `Original collection : ${originalInput}`
    );
    backupVariables.lastTime = timer("stop");
    invoke_floater(
      "left:10px;top:20px",
      `Iterated : ${backupVariables.globalteration - 1} times. Time taken : ${
        backupVariables.lastTime
      } seconds`,
      2000
    );
  }
  if (selectionValue === "Quick-sort") {
    timer("start");
    quickSort(givenArray, 0, givenArray.length - 1, originalInput);
    iterationPush(
      `Iterated : ${backupVariables.globalteration - 1} times.`,
      `Time taken : ${backupVariables.lastTime} seconds`,
      ``,
      `Current collection : ${givenArray}`,
      `Original collection : ${originalInput}`
    );
    backupVariables.lastTime = timer("stop");
    invoke_floater(
      "left:10px;top:20px",
      `Iterated : ${backupVariables.globalteration - 1} times. Time taken : ${
        backupVariables.lastTime
      } seconds`,
      2000
    );
  }
  if (selectionValue === "Heap-sort") {
    timer(`start`);
    heapSort(givenArray, givenArray.length, originalInput);
    backupVariables.lastTime = timer("stop");
    invoke_floater(
      "left:10px;top:20px",
      `Iterated : ${backupVariables.globalteration - 1} times. Time taken : ${
        backupVariables.lastTime
      } seconds`,
      2000
    );
  }
  if (selectionValue === "Bubble-sort") {
    timer(`start`);
    bubblesort(givenArray, originalInput);
    backupVariables.lastTime = timer("stop");
    invoke_floater(
      "left:10px;top:20px",
      `Iterated : ${backupVariables.globalteration - 1} times. Time taken : ${
        backupVariables.lastTime
      } seconds`,
      2000
    );
  }
  if (selectionValue === "Binary-search") {
    timer(`start`);
    let targetValue = givenArray.pop();
    givenArray.sort((a, b) => a - b);
    let foundAt = binarySearch(
      givenArray,
      0,
      currentValue - 1,
      targetValue,
      "simulation"
    );
    backupVariables.lastTime = timer("stop");
    if (foundAt !== false)
      invoke_floater(
        "left:10px;top:20px",
        `Iterated : ${
          backupVariables.globalteration - 1
        } times. Found ${targetValue} at ${foundAt}. Time taken : ${
          backupVariables.lastTime
        } seconds`,
        2000
      );
    else
      invoke_floater(
        "left:10px;top:20px",
        `Iterated : ${
          backupVariables.globalteration - 1
        } times. ${targetValue} does not exist in this collection. Time taken : ${
          backupVariables.lastTime
        } seconds`,
        2000
      );
  }
  if (selectionValue === "Exponentiation by squaring") {
    timer(`start`);
    let value = exponentiationBySquaring(
      singleValueInput,
      singleValueInput1,
      1000000007
    );
    backupVariables.lastTime = timer("stop");
    let square = singleValueInput ** singleValueInput1;

    if (square < Infinity) console.log(`BigInt : ${BigInt(square).toString()}`);

    invoke_floater(
      "left:10px;top:20px",
      `Iterated : ${
        backupVariables.globalteration - 1
      } times. The result is ${value}. Time taken : ${
        backupVariables.lastTime
      } seconds`,
      2000
    );
  }
  if (selectionValue === "BFS") {
    currentValue = processGraph(givenArray, selectionValue);
    timer("start");
    BFS();
    backupVariables.lastTime = timer("stop");
    currentGraphInfo.visitState.sort((a, b) => a - b);
  }
  if (selectionValue === "DFS") {
    currentValue = processGraph(givenArray, selectionValue);
    timer("start");
    DFS(currentGraphInfo.source, -1);
    backupVariables.lastTime = timer("stop");
    invoke_floater(
      "left:10px;top:20px",
      `Iterated : ${backupVariables.globalteration - 1} times. There are ${
        currentGraphInfo.cycles
      } cycles in this graph.`,
      2000
    );
  }
  if (selectionValue === "Dijkstra") {
    currentValue = processGraph(givenArray, selectionValue);
    timer("start");
    Dijkstra(currentGraphInfo.target);
    backupVariables.lastTime = timer("stop");
  }
  console.log(currentGraphInfo.iterationSerial);
  console.log(currentGraphInfo.visitState);

  resetGraphInfo();
  updateGraph(selectionValue, currentValue, backupVariables.lastTime);
});

resultClearButton.addEventListener("click", () => {
  clear();
});

pageElements.floater.addEventListener("click", () => {
  if (pageLogics.floater_inflated) deflate_floater();
  else inflate_floater();
});

pageElements.display_toggle.addEventListener("click", () => {
  if (!backupVariables.iterationShown) {
    iteration_toggle("show");
  } else {
    iteration_toggle("hide");
  }
});

pageElements.generationButton.addEventListener("click", () => {
  resetGenerationInfo();
  let number = pageElements.input_box.value;
  number = number.split(",");

  numberify(number);

  let tempString = "";
  // console.log(number);

  if (
    usefulVariables.currentAlgorithm === "BFS" ||
    usefulVariables.currentAlgorithm === "DFS" ||
    usefulVariables.currentAlgorithm === "Dijkstra"
  ) {
    tempString = generateGraph(number);
  } else tempString = generateInputArray(number);

  document.getElementById(`input`).value = tempString;
});

pageElements.floater_indicator.addEventListener("click", () => {
  if (!pageLogics.floater_gen_shrunk) {
    pageElements.floater_indicator.style = ` transform: rotate(180deg);`;
    pageLogics.floater_gen_shrunk = true;
    pageElements.input_gen_cont.style = `transform: translateX(270px);`;
  } else {
    pageElements.floater_indicator.style = ``;
    pageLogics.floater_gen_shrunk = false;
    pageElements.input_gen_cont.style = ``;
  }
});

pageElements.input.addEventListener("focus", () => {
  pageElements.input.style = `width:100%;`;
});

pageElements.input.addEventListener("blur", () => {
  pageElements.input.style = ``;
});

// currentGraphInfo.priorityQueue.push('23', 1);
// currentGraphInfo.priorityQueue.push('25', 1);
// currentGraphInfo.priorityQueue.push('24', 2);
// currentGraphInfo.priorityQueue.front();
// console.log(currentGraphInfo.priorityQueue.printPQueue());

// currentGraphInfo.priorityQueue.removeAll();

// console.log(currentGraphInfo.priorityQueue.printPQueue());

// let array = [2, 4, 45, 5, 12, 3, 10, 1]
// array.sort((a, b) => a - b)
// console.log(binarySearch(array, 0, array.length - 1, 11), array);
