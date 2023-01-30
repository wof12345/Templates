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

function findMaxExponentFromString() {
  let exponentObj = equation.exponentObj;
  let coefficientObj = equation.coefficientObj;

  for (let key in coefficientObj) {
    let keyNumber = +key.split("^")[1];

    if (!isNaN(keyNumber))
      exponentObj.push([keyNumber, key, coefficientObj[key]], keyNumber);
    else {
      if (isVariable(key)) {
        exponentObj.push([1, key, coefficientObj[key]], 1);
      } else exponentObj.push(+coefficientObj[key], -new Date().getTime());
    }
  }
}

function translateObjStringToInteger(givenValue = 1) {
  let coefficientObj = equation.coefficientObj;

  let total = 0;
  for (let key in coefficientObj) {
    let keyNumber = +key.split("^")[1];
    if (isNaN(+keyNumber)) keyNumber = 1;

    if (key !== "") {
      total += Math.pow(givenValue, keyNumber) * +coefficientObj[key];
    } else {
      total += +coefficientObj[key];
    }
    // console.log("bis", total, +coefficientObj[key]);
  }

  return total;
}

function resetEquation() {
  equation.variableSet = new Set();
  equation.operatorArray = [];
  equation.operatorSet = new Set();
  equation.coefficientObj = {};
  equation.exponentObj = new PriorityQueue();
  resultView.innerHTML = "";
}

function fillEmptyOperator(character) {
  let operatorPositionCharacter = character[0];
  if (isOperator(operatorPositionCharacter)) {
    if (operatorPositionCharacter === "=")
      character = character.slice(1, character.length);
  }

  if (!isOperator(character[0])) return "+" + character;
  else return character;
}
