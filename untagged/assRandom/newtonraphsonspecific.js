function evaluation(x) {
  return Math.pow(x, 3) - 6 * x + 4;
}

function evaluationDiff(x) {
  return 3 * Math.pow(x, 2) - x;
}

function raphsonFormula(point) {
  return point - evaluation(point) / evaluationDiff(point);
}

function errorEval(a, b, err = 0.0005) {
  if (Math.abs(evaluation(a) - evaluation(b)) <= err) return true;
  return false;
}

let point = 1;
let lastPoint = 0;
let it = 0;

while (1) {
  point = raphsonFormula(point);

  let equationVal = evaluation(point);
  console.log(point, equationVal);
  it++;
  if (errorEval(point, lastPoint) || it > 100) break;

  lastPoint = point;
}
