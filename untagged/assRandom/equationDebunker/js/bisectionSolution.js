function bisectionSolution() {
  let exponentObj = equation.exponentObj;

  let lowerLimitG = 0;
  let upperLimitG = 0;

  let iteration = 0;

  let lastMark = 0;
  let lastMarkupper = 0;

  for (let i = 1; i; i++) {
    let lowerLimit = translateObjStringToInteger(i);
    let upperLimit = translateObjStringToInteger(i + 1);

    if (
      (lowerLimit < 0 && upperLimit > 0) ||
      (lowerLimit > 0 && upperLimit < 0)
    ) {
      lowerLimitG = i;
      upperLimitG = i + 1;
      break;
    }
  }

  lastMark = lowerLimitG;
  lastMarkupper = upperLimitG;

  while (1) {
    let resultString = "";
    let iterationMark = (lastMark + lastMarkupper) / 2;
    let parsedFloat = iterationMark.toFixed(2);
    let parsedFloatlastMark = lastMark.toFixed(2);

    let translatedMark = translateObjStringToInteger(iterationMark);
    console.log(lastMark, lastMarkupper, iterationMark, translatedMark);

    if (iteration > 100 || parsedFloat === parsedFloatlastMark) {
      break;
    }

    resultString =
      lastMark +
      " " +
      lastMarkupper +
      " bisection value : " +
      iterationMark +
      " function value : " +
      translatedMark;

    resultView.innerHTML += resultFormat(resultString);

    if (translatedMark > 0) {
      lastMark = lastMark;
      lastMarkupper = iterationMark;
    } else {
      lastMark = iterationMark;
      lastMarkupper = lastMarkupper;
    }

    iteration++;
  }
}
