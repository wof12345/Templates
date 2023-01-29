function hornerEvaluation() {
  let exponentObj = equation.exponentObj;
  findMaxExponentFromString();
  let sayX = !isNaN(+contextInput.value) ? +contextInput.value : 1;
  let resultArray = [];
  let iteration = exponentObj.length() - 1;

  let lastResult = +exponentObj.rear()[2];

  let resultString = lastResult;

  resultArray.push(lastResult);
  resultView.innerHTML += resultFormat(resultString);
  while (!exponentObj.isEmpty()) {
    let currentIterationItem = exponentObj.rear();
    let currentIterationItemNext = exponentObj.nextLastToRear();

    let result = 0;

    if (!isNaN(+currentIterationItemNext[2]))
      currentIterationItemNext = currentIterationItemNext[2];

    if (!isNaN(+currentIterationItem[2]))
      currentIterationItem = currentIterationItem[2];

    lastResult = result = +lastResult * sayX + +currentIterationItemNext;
    console.log(currentIterationItemNext);

    resultString =
      lastResult +
      "*" +
      sayX +
      "" +
      currentIterationItemNext +
      `= ${lastResult}`;

    if (!isNaN(result)) {
      resultArray.push(result);
      resultView.innerHTML += resultFormat(resultString);
    }

    exponentObj.pop();
    iteration--;
    // break;
  }
  console.log("item", resultArray);
}
