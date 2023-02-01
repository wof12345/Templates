function fixedPointSolution() {
  let coefficientObj = equation.coefficientObj;

  let equationArray = formulateFixedPointEquation();

  equationArray.forEach((elm) => {
    if (elm.length) {
      console.log(elm);
    }
  });
  console.log(equationArray);
}
