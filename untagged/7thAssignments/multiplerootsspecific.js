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
let coefficients = [2, 1, -9.575, -179.558514];
let degree = coefficients.length;

let roots = [];

while (degree--) {
  console.log("eq", coefficients);

  point = raphsonFormula(point);

  let root = point.toFixed(5);
  roots.push(root);
  syntheticDivision(root, degree);

  it++;
  if (errorEval(point, lastPoint) || it > 2) {
    break;
  }
  lastPoint = point;
}

console.log(roots);

function isOperator(char, isDivide) {
  if (
    char === "+" ||
    char === "-" ||
    char === "/" ||
    char === "*" ||
    char === "=" ||
    char === "%"
  ) {
    return true;
  }

  return false;
}

function syntheticDivision(root, degree) {
  let maxExponent = degree;

  let bn = 0;

  let equation = "";
  let coefficientArray = [];

  for (let i = 0; i < degree + 1; i++) {
    bn = coefficients[i] + bn * root;

    if (i !== maxExponent) {
      coefficientArray.push(bn);
      if (maxExponent > -1) {
      }
      equation +=
        (isOperator(bn.toString()[0]) ? bn : "+" + bn) +
        (i < coefficients.length - 1 ? (maxExponent > 0 ? "x" : "") : "") +
        (maxExponent > 1 ? "^" + maxExponent : "");
      maxExponent--;
    }
  }
  coefficients = coefficientArray;
  console.log(equation);
}
