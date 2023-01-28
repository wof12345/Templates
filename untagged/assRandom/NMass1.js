//count significant
let number = "0400030340.000000000230";

let numberOfSignificant = 0;
let numberOfNonSignificantAfterDecimal = 0;
let numberOfSignificantAfterDecimal = 0;

let afterDecimal = false;
let isSignificant = false;
let firstDigitDone = false;

for (let i = 0; i < number.length; i++) {
  if (number[i] === ".") afterDecimal = true; //if after decimal
  else if (number[i] !== "0" && !firstDigitDone) {
    firstDigitDone = true; //if  not first digit
  }

  if (firstDigitDone && !afterDecimal) {
    numberOfSignificant++; //if not first digit and before decimal
  }

  if (afterDecimal && number[i] !== "0" && number[i] !== ".") {
    // console.log(number[i]);

    isSignificant = true; //if after decimal and not zero and not decimal
  }

  if (isSignificant) {
    numberOfSignificant++;

    numberOfSignificantAfterDecimal++;
  } else if (afterDecimal && number[i] !== ".") {
    numberOfNonSignificantAfterDecimal++;
  }
}

function decider(decider) {
  if (decider > 0) {
    return numberOfSignificant;
  } else return numberOfSignificant + 1;
}

console.log(decider(numberOfSignificantAfterDecimal));
