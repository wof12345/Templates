////bankers rounding
let number = "4.99957";
let reformedNumber = "";
let roundLimit = 3;

let numberOfSignificant = 0;
let numberOfNonSignificantAfterDecimal = 0;
let numberOfSignificantAfterDecimal = 0;

let prevNumbers = [];
let afterDecimal = false;

for (let i = 0, afterDecimalCount = 0; i < number.length; i++) {
  let numberToBeHad = number[i];
  let numberToBeHadInt = +number[i];
  let nextNumber = +number[i + 1];
  let prevNumber = reformedNumber[i - 1];

  if (afterDecimalCount === roundLimit) {
    console.log(afterDecimalCount, roundLimit, nextNumber, numberToBeHadInt);
    if (nextNumber > 5) {
      numberToBeHad = "" + (numberToBeHadInt + 1);
    } else if (nextNumber === 5) {
      if (numberToBeHadInt % 2 !== 0) {
        if (numberToBeHadInt === 9) {
          numberToBeHad = "0";

          prevNumbers = [numberToBeHad];
          let lastModify = false;
          for (let count = i; count > 0; count--) {
            let modifiedNumber = reformedNumber[count - 1];
            if (reformedNumber[count - 1] !== ".") {
              modifiedNumber = +reformedNumber[count - 1];
              if (modifiedNumber < 9) {
                if (!lastModify) {
                  modifiedNumber = modifiedNumber + 1;
                  lastModify = true;
                }
              } else {
                modifiedNumber = 0;
              }
            }
            prevNumbers.push(modifiedNumber + "");
          }
          reformedNumber = reformNumber();
        } else numberToBeHad = "" + (numberToBeHadInt + 1);
      }
    }
  }

  if (number[i] === "." || afterDecimal) {
    afterDecimal = true;
    afterDecimalCount++;
  } //if after decimal

  reformedNumber += numberToBeHad;

  if (afterDecimalCount > roundLimit) break;
}

function reformNumber(number = "") {
  for (let count = prevNumbers.length - 1; count > 0; count--) {
    number += prevNumbers[count];
  }
  return number;
}

console.log(reformedNumber);
