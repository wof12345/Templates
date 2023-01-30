function GENERATERANDOMNUMBER(arrayToCompare, lowerrange, upperrange, type) {
  if (lowerrange > upperrange) {
    lowerrange = upperrange;
  }
  let generatedNumber;
  if (type === "integer") {
    generatedNumber = +(
      Math.random() * (upperrange - lowerrange + 1) +
      lowerrange -
      1
    ).toFixed(0);
  } else if (type === "double") {
    generatedNumber = +(
      Math.random() * (upperrange - lowerrange + 1) +
      lowerrange -
      1
    ).toFixed(5);
  }

  if (
    !BINARYSEARCH(
      arrayToCompare,
      0,
      arrayToCompare.length - 1,
      generatedNumber
    )[0] &&
    generatedNumber >= lowerrange
  ) {
    return generatedNumber;
  } else {
    return GENERATERANDOMNUMBER(arrayToCompare, lowerrange, upperrange, type);
  }
}

function BINARYSEARCH(arr, start, end, target) {
  if (end >= start) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) return [true, mid];

    if (arr[mid] > target) return BINARYSEARCH(arr, start, mid - 1, target);

    return BINARYSEARCH(arr, mid + 1, end, target);
  }
  return false;
}
// /we will go home after finishing the class today!
let cipherText = "LRLLODEOHW";
let possibleRow = [];
let possibleColumn = [];

let matrixPhysical = [];

let maxMatrix = 26;

function getMaxPossibleMatrix() {
  maxMatrix = cipherText.length;

  for (let i = 1, valid = 0; i < maxMatrix + 1; i++) {
    for (let j = maxMatrix; j > 0; j--) {
      if (j * i === maxMatrix) {
        possibleRow.push(i);
        possibleColumn.push(j);
        matrixPhysical.push({});
        valid++;
      }
    }
  }
}

function generateMaxPossibleMatrix() {
  for (let l = 0; l < matrixPhysical.length; l++) {
    let workedIndex = 0;
    for (let i = 0; i < possibleRow[l]; i++) {
      let rowString = "";
      console.log(workedIndex);
      for (let i = 0; i < possibleColumn[l]; i++, workedIndex++) {
        rowString += cipherText[workedIndex];
      }
      matrixPhysical[l][i] = rowString;
    }
  }
}

function generatePossiblePlaintexts() {
  matrixPhysical.forEach((elm) => {
    console.log("elm", elm);
    let objLength = Object.keys(elm).length;
    for (let keyPrimary in elm) {
      let possibleString = "";
      possibleString += elm[keyPrimary];
      for (let i = 0; i < objLength; i++) {
        for (let j = 0; j < objLength; j++) {
          let indexToUse = i + 1;
          if (indexToUse >= objLength) {
            indexToUse = objLength - indexToUse;
          }

          if (i !== j) possibleString += elm[indexToUse];
          // console.log(elm[indexToUse + ""]);
        }

        console.log(possibleString);
      }
    }
    console.log("\n");
  });
}

getMaxPossibleMatrix();
generateMaxPossibleMatrix();
generatePossiblePlaintexts();

console.log(matrixPhysical);
