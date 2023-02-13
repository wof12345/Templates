let point = 1;
let lastPoint = 0;
let it = 0;
let coefficients = [-9.575, -179.558514];
let degree = coefficients.length;

function evaluatePolynomial(xValues, coefficient) {
  let totalDegree = coefficient.length - 1;
  let total = 0;
  xValues.forEach((x) => {
    let degree = totalDegree;
    coefficient.forEach((coeff) => {
      total += coeff * Math.pow(x, degree);
      degree--;
    });
  });
  console.log(total);

  return total;
}

function evaluatePolynomialDiff(xValues, coefficient) {
  let totalDegree = coefficient.length - 1;
  let total = 0;
  xValues.forEach((x) => {
    let degree = totalDegree;
    coefficient.forEach((coeff) => {
      total += degree * coeff * Math.pow(x, degree - 1);
      degree--;
    });
  });
  return total;
}

function raphsonFormula(point) {
  return (
    point -
    evaluatePolynomial([point], coefficients) /
      evaluatePolynomialDiff([point], coefficients)
  );
}

function errorEval(a, b, err = 0.0005) {
  if (Math.abs(evaluatePolynomial(a) - evaluatePolynomial(b)) <= err)
    return true;
  return false;
}

let roots = [];

evaluatePolynomial([2], [2, 3]);

while (degree--) {
  console.log("eq", coefficients);

  point = raphsonFormula(point);

  let root = point.toFixed(2);
  roots.push(root);
  //   syntheticDivision(root, degree);

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
