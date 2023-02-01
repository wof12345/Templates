function equationEval(x) {
  return Math.pow(x, 3) - 6 * x + 4;
}

function equationEvalDiff(x) {
  return 3 * Math.pow(x, 2) - x;
}

function raphsonFormula(point) {
  return point - equationEval(point) / equationEvalDiff(point);
}

let point = 1;
let it = 0;

while (1) {
  point = raphsonFormula(point);

  let equationVal = equationEval(point);
  console.log(point, equationVal);
  it++;
  if (equationVal <= 0 || it > 100) break;
}
