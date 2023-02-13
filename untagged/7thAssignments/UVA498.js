let coefficient = [-2];
let xValues = [5, 0, 1, 6];

// console.log(totalDegree);
function evaluatePolynomial(xValues, coefficient) {
  let totalDegree = coefficient.length - 1;
  xValues.forEach((x) => {
    let total = 0;
    let degree = totalDegree;
    coefficient.forEach((coeff) => {
      total += coeff * Math.pow(x, degree);
      degree--;
    });
    console.log(total);
  });
}

evaluatePolynomial(xValues, coefficient);
