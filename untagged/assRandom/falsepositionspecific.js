function equationEval(x) {
  return Math.pow(x, 3) - x + 2;
}

function fpFormula(x1, x2) {
  return (
    x1 - (equationEval(x1) * (x2 - x1)) / (equationEval(x2) - equationEval(x1))
  );
}

function fpCondition(x1, x2) {
  if (equationEval(x1) * equationEval(x2) < 0) {
    return true;
  }
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
  if (it > 500 || lastEval.toFixed(3) === fpValue.toFixed(3)) break;

  lastEval = fpValue;
}
