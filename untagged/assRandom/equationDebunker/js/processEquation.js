function processInitialEquationView() {
  let equationString = "";
  let coefficientObj = equation.coefficientObj;

  for (let key in coefficientObj) {
    if (key === "") equationString += "=";
    equationString += coefficientObj[key] + key;
  }

  inputView.textContent = equationString;

  if (currentMethod === "Horner's Rule") hornerEvaluation();
  if (currentMethod === "Bisection") bisectionSolution();
  if (currentMethod === "Fixed point") fixedPointSolution();
  // if (currentMethod === "Bisection") bisectionSolution();
  // if (currentMethod === "Bisection") bisectionSolution();
  // if (currentMethod === "Bisection") bisectionSolution();
  // if (currentMethod === "Bisection") bisectionSolution();
}
