let coefficients = [1, -7, 15, -9];
let root = 3;
let maxExponent = coefficients.length - 1;
let b3 = 0;

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

let equation = "";
for (let i = 0; i < coefficients.length; i++) {
  b3 = coefficients[i] + b3 * root;

  equation +=
    (isOperator(b3.toString()[0]) ? b3 : "+" + b3) +
    (i < coefficients.length - 1 ? "x" : "") +
    (maxExponent > 0 ? "^" + maxExponent : "");
  maxExponent--;
}
console.log(equation);
