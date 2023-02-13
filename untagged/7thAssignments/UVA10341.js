let p = 0,
  q = 0,
  r = 0,
  s = 0,
  t = -2,
  u = 1;

function evaluation(x) {
  return (
    p * Math.exp(-x) +
    q * Math.sin(x) +
    r * Math.cos(x) +
    s * Math.tan(x) +
    t * x * x +
    u
  );
}

function errorEval(a, b, err = 0.0008) {
  //   console.log("e", Math.abs(evaluation(a) - evaluation(b)));

  if (Math.abs(evaluation(a) - evaluation(b)) <= err) return true;
  return false;
}

function bisectionSolution() {
  let decimalRange = 4;

  let lowerLimitG = 0;
  let upperLimitG = 0;

  let iteration = 0;

  let lastMark = 0;
  let lastMarkupper = 0;

  for (let i = 0; i > -100; i++) {
    let foundPoint = false;
    for (let j = 1; j; j++) {
      //find valid points

      let lowerLimit = evaluation(i);
      let upperLimit = evaluation(j);
      //   console.log("do");
      //   console.log(lowerLimit, upperLimit);

      if (
        (lowerLimit < 0 && upperLimit > 0) ||
        (lowerLimit > 0 && upperLimit < 0)
      ) {
        lowerLimitG = i;
        upperLimitG = j;
        foundPoint = true;
        break;
      }

      if (j > 100) break;
    }

    if (foundPoint) break;

    if (i > 100) {
      console.log("No valid points found within range!");
      break;
    }
  }

  lastMark = lowerLimitG;
  lastMarkupper = upperLimitG;

  while (1) {
    //bisection loop
    // console.log(Math.exp(-2));

    let iterationMark = (lastMark + lastMarkupper) / 2;
    let parsedFloat = iterationMark.toFixed(decimalRange);
    let parsedFloatlastMark = lastMark.toFixed(decimalRange);

    let translatedMark = evaluation(iterationMark);

    // console.log(
    //   lastMark,
    //   lastMarkupper,
    //   iterationMark,
    //   translatedMark
    //   //   translatedMark2
    // );

    if (iteration > 100 || errorEval(lastMark, lastMarkupper)) {
      console.log(iterationMark.toFixed(decimalRange));

      break;
    }
    if (translatedMark > 0) {
      lastMark = iterationMark;
    } else {
      lastMarkupper = iterationMark;
    }

    iteration++;
  }
}

bisectionSolution();
