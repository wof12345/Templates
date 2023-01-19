function divideCoefficients(array) {
  let coefficientObjString = equation.coefficientObjString;
  array.forEach((elm, ind) => {
    let coefficient = "";
    let variable = "";

    if (elm !== "") {
      let refinedElm = fillEmptyOperator(elm);
      elm = refinedElm;

      for (let i = 0; i < elm.length; i++) {
        if (isVariable(elm[i])) variable += elm[i];
        else coefficient += elm[i];
      }

      if (!(variable in coefficientObjString))
        coefficientObjString[variable] = "";

      coefficientObjString[variable] += coefficient;
    }
  });
}

function identifyCoefficients(text) {
  let splitString = ">>";
  //   let operatorSet = equation.operatorSet;

  //   operatorSet.forEach((operator, ind) => {
  //     splitString +=
  //       "\\" +
  //       operator +
  //       (!isLastElmOfArray(getLastValueOfSet(operatorSet), operator) ? "|" : "");
  //   });

  let splitEquationArray = text.split(splitString);
  divideCoefficients(splitEquationArray);
}
