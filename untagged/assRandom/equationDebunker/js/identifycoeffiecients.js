function divideCoefficients(array) {
  let coefficientObj = equation.coefficientObj;
  array.forEach((elm, ind) => {
    let coefficient = "";
    let variable = "";

    if (elm !== "" && elm !== "=") {
      let refinedElm = fillEmptyOperator(elm).trim();
      let totalString = refinedElm.split("^");

      let toCompare = totalString[0] !== "" ? totalString[0] : refinedElm;
      let forVariable = totalString[1];

      let isVariableDefiner = false;

      for (let i = 0; i < toCompare.length; i++) {
        // console.log(variable, coefficient);
        if (isVariable(toCompare[i])) {
          variable += toCompare[i];
          isVariableDefiner = true;
        } else coefficient += toCompare[i];
      }

      if (isVariableDefiner) {
        variable += forVariable !== undefined ? "^" + forVariable : "";
      }

      if (!(variable in coefficientObj)) coefficientObj[variable] = "";

      // console.log("efficeint", elm, +coefficient);
      coefficientObj[variable] += !isNaN(+coefficient)
        ? coefficient
        : coefficient + "1";
    }
  });

  // translateObjStringToInteger();
  processInitialEquationView();
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
