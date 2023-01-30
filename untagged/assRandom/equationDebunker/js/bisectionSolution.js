function bisectionSolution() {
  let exponentObj = equation.exponentObj;
  let decimalRange = !isNaN(+contextInput.value) ? +contextInput.value : 2;

  let lowerLimitG = 0;
  let upperLimitG = 0;

  let iteration = 0;

  let lastMark = 0;
  let lastMarkupper = 0;

  let error = 0.0005;

  for (let i = 1; i; i++) {
    let fooundPoint = false;
    for (let j = 2; j; j++) {
      //find valid points

      let lowerLimit = translateObjStringToInteger(i);
      let upperLimit = translateObjStringToInteger(j);

      if (
        (lowerLimit < 0 && upperLimit > 0) ||
        (lowerLimit > 0 && upperLimit < 0)
      ) {
        lowerLimitG = i;
        upperLimitG = j;
        fooundPoint = true;
        break;
      }

      if (j > 1000) break;
    }

    if (fooundPoint) break;

    if (i > 1000) {
      resultView.innerHTML += resultFormat(
        "No valid points found within range!"
      );
      break;
    }
  }

  lastMark = lowerLimitG;
  lastMarkupper = upperLimitG;

  while (1) {
    //bisection loop
    let resultString = "";
    let iterationMark = (lastMark + lastMarkupper) / 2;
    let parsedFloat = iterationMark.toFixed(decimalRange);
    let parsedFloatlastMark = lastMark.toFixed(decimalRange);

    let translatedMark = translateObjStringToInteger(iterationMark);
    console.log(lastMark, lastMarkupper, iterationMark, translatedMark);

    if (iteration > 100 || Math.abs(iterationMark - lastMark) <= error) {
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
