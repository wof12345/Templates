function processInitialEquationView() {
  let equationString = "";
  let coefficientObj = equation.coefficientObj;

  for (let key in coefficientObj) {
    if (key === "") equationString += "=";
    equationString += coefficientObj[key] + key;
  }

  inputView.textContent = equationString;

  console.log(currentMethod);

  if (currentMethod === "Horner's Rule") hornerEvaluation();
}
