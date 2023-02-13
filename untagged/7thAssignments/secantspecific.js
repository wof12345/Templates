function evaluation(x) {
  return Math.pow(x, 3) - 5 * Math.pow(x, 2) - 29;
}

function secanteFormula(x1, x2) {
  let f1 = evaluation(x1);
  let f2 = evaluation(x2);

  return (f2 * x1 - f1 * x2) / (f2 - f1);
}

function errorEval(a, b, err = 0.0005) {
  if (Math.abs(evaluation(a) - evaluation(b)) <= err) return true;
  return false;
}

let x1 = 1;
let x2 = 3;

let x3 = 0;
let it = 0;

while (1) {
  x3 = secanteFormula(x1, x2);
  console.log(x3);

  if (!errorEval(x3, x2)) {
    x1 = x2;
    x2 = x3;
  } else {
    console.log(x3);
    break;
  }

  it++;

  if (it > 100) break;
}
