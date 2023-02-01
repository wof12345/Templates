function evaluation(x, a) {
  return Math.pow(a / (1 + Math.pow(x, 3)), 1 / 2);
}

function evaluation1(x, a) {
  return Math.pow(a / (1 + x), 1 / 2);
}

function errorEval(a, b, err = 0.0005) {
  if (Math.abs(evaluation(a) - evaluation(b)) <= err) return true;
  return false;
}

let lastEval = 1;
let it = 0;

while (1) {
  let currentEval = evaluation(lastEval, 10);
  console.log("le", lastEval);

  console.log(currentEval);
  if (errorEval(currentEval, lastEval) || it > 100) break;

  it++;
  lastEval = currentEval;
}
