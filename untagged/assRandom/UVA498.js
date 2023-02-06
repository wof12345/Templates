let coefficient = [1, -1];
let xValues = [7, 6, -1];
let totalDegree = coefficient.length - 1;

// console.log(totalDegree);

xValues.forEach((x) => {
  let total = 0;
  let degree = totalDegree;
  coefficient.forEach((coeff) => {
    total += coeff * Math.pow(x, degree);
    degree--;
  });
  console.log(total);
});
