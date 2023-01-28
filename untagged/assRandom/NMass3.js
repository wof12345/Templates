////bankers rounding
let number = "0400030340.132500000230";
let reformedNumber = "";
let roundLimit = 3;

let numberOfSignificant = 0;
let numberOfNonSignificantAfterDecimal = 0;
let numberOfSignificantAfterDecimal = 0;

let afterDecimal = false;

for (let i = 0, afterDecimalCount = 0; i < number.length; i++) {
  let numberToBeHad = number[i];
  let numberToBeHadInt = +number[i];
  let nextNumber = +number[i + 1];

  if (afterDecimalCount === roundLimit) {
    console.log(afterDecimalCount, roundLimit, nextNumber, numberToBeHadInt);
    if (nextNumber > 5) {
      numberToBeHad = "" + (numberToBeHadInt + 1);
    } else if (nextNumber === 5) {
      if (nextNumber % 2 !== 0) numberToBeHad = "" + (numberToBeHadInt + 1);
    }
  }

  if (number[i] === "." || afterDecimal) {
    afterDecimal = true;
    afterDecimalCount++;
  } //if after decimal

  reformedNumber += numberToBeHad;

  if (afterDecimalCount > roundLimit) break;
}

function round(number) {}

console.log(reformedNumber);
