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

function isVariable(char) {
  if (isNaN(+char) && !isOperator(char)) {
    return true;
  }

  return false;
}

function getLastValueOfSet(set) {
  let value;
  for (value of set);
  return value;
}

function isLastElmOfArray(param1, param2) {
  if (param2 === param1) {
    return true;
  }

  return false;
}

function resetEquation() {
  equation.variableSet = new Set();
  equation.operatorArray = [];
  equation.operatorSet = new Set();
  equation.coefficientObjString = {};
  equation.exponentObj = {};
}

function fillEmptyOperator(character) {
  let operatorPositionCharacter = character[0];
  if (isOperator(operatorPositionCharacter)) {
    if (operatorPositionCharacter === "=")
      character = character.slice(1, character.length);
    else return character;
  }
  return "+" + character;
}
