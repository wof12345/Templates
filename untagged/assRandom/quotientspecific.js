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

function evaluation(x) {
  return Math.pow(x, 3) - 5 * Math.pow(x, 2) + 10 * x - 8;
}

function errorEval(a, b, err = 0.0005) {
  if (Math.abs(evaluation(a) - evaluation(b)) <= err) return true;
  return false;
}

let coefficients = [1, -5, 10];
let root = 2;
let maxExponent = coefficients.length - 1;
let b3 = 0;

let equation = "";

for (let i = 0; i < coefficients.length; i++) {
  b3 = coefficients[i] + b3 * root;

  equation +=
    (isOperator(b3.toString()[0]) ? b3 : "+" + b3) +
    (i < coefficients.length - 1 ? "x" : "") +
    (maxExponent > 0 ? "^" + maxExponent : "");
  maxExponent--;
  console.log(equation);
}
