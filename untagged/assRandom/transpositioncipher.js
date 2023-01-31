let cipherText = "LRLLODEOHW";

let sayPlainText = "HELLO WORLD";
let possibleRow = [];
let possibleColumn = [];

let matrixPhysical = [];
let matrixPhysicalActualForm = [];
let permutationArray = [];

let resultObject = {};

let maxMatrix = 26;

const stringPermutations = (str) => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split("")
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    );
};

function processPlaintText() {
  sayPlainText = sayPlainText
    .split(" ")
    .map((string) => string.trim())
    .join("");

  console.log(sayPlainText);
}

function getMaxPossibleMatrix() {
  maxMatrix = cipherText.length;

  for (let i = 1, valid = 0; i < maxMatrix + 1; i++) {
    for (let j = maxMatrix; j > 0; j--) {
      if (j * i === maxMatrix && i !== 1 && j !== 1) {
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
      // console.log(workedIndex);
      for (let i = 0; i < possibleColumn[l]; i++, workedIndex++) {
        rowString += cipherText[workedIndex];
      }
      matrixPhysical[l][i] = rowString;
    }
  }
}

function generatePossiblePlaintexts() {
  matrixPhysicalActualForm.forEach((elm, ind) => {
    console.log("elm", elm);
    let objLength = Object.keys(elm).length;
    let elmLength = elm["0"].length;
    permutationArray.push([]);

    for (let j = 0; j < objLength; j++) {
      permutationArray[ind].push(stringPermutations(elm["" + j]));
    }
  });
  // console.log(permutationArray);
}

function viewAllPossibleString() {
  permutationArray.forEach((elm) => {
    let len = elm[0].length;
    // console.log(len);

    for (let i = 0; i < len; i++) {
      let string = "";
      elm.forEach((elmStr) => {
        string += elmStr[i];
      });

      if (string === sayPlainText) {
        resultObject["string"] = string;
        resultObject["permutationNo"] = i;
      }
      // console.log(string);
    }
  });
  console.log(resultObject);
}

function generateViewForTransposition() {
  matrixPhysical.forEach((elm, ind) => {
    let objLength = Object.keys(elm).length;

    matrixPhysicalActualForm.push({});

    for (let j = 0; j < elm["0"].length; j++) {
      let string = "";
      for (let i = 0; i < objLength; i++) {
        string += "" + elm["" + i][j];
      }
      matrixPhysicalActualForm[ind][j] = string;
      // console.log(string);
    }
  });
}

processPlaintText();
getMaxPossibleMatrix();
generateMaxPossibleMatrix();
generateViewForTransposition();
generatePossiblePlaintexts();
viewAllPossibleString();

// console.log(matrixPhysicalActualForm);
