function evaluation(x) {
  return Math.pow(x, 3) - x + 2;
}

function fpFormula(x1, x2) {
  return x1 - (evaluation(x1) * (x2 - x1)) / (evaluation(x2) - evaluation(x1));
}

function fpCondition(x1, x2) {
  if (evaluation(x1) * evaluation(x2) < 0) {
    return true;
  }
  return false;
}

function errorEval(a, b, err = 0.0005) {
  if (Math.abs(evaluation(a) - evaluation(b)) <= err) return true;
  return false;
}

let x1 = 1;
let x2 = 2;

let it = 0,
  lastEval = 0;

while (1) {
  let fpValue = fpFormula(x1, x2);

  if (fpCondition(fpValue, x1)) {
    x2 = fpValue;
  } else x1 = fpValue;

  console.log(fpValue);

  it++;
  if (it > 500 || errorEval(fpValue, lastEval)) break;

  lastEval = fpValue;
}
