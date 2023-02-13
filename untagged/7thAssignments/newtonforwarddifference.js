//forward difference
let uArrayX = [1891, 1901, 1911, 1921, 1931];
let uArrayY = [46, 66, 81, 93, 101];

let xDifferenceInterval = uArrayX[1] - uArrayX[0];

let uArrayDifferenceTableArray = [[...uArrayY]];

let newArray = [];

let number = "";
function getFactorial(range) {
  let factorial = 1;
  for (let j = 1; j <= range; j++) {
    factorial = factorial * j;
  }

  return factorial;
}

function getPerm(value, it) {
  let result = value;
  for (let j = 1; j < it; j++) {
    result *= value - j;
  }

  return result;
}

// console.log(getFactorial(3));

function generateDifferenceTable() {
  for (let j = 0; j < uArrayX.length - 1; j++) {
    for (let i = 0; i < uArrayY.length - 1; i++) {
      uArrayY[i] = uArrayY[i + 1] - uArrayY[i];
    }
    uArrayY.pop();

    uArrayDifferenceTableArray.push([...uArrayY]);
  }
  // console.log(uArrayDifferenceTableArray);
}

function newtonForwardEval(x) {
  let pxConstant = (x - uArrayX[0]) / xDifferenceInterval;
  let result = uArrayDifferenceTableArray[0][0];

  for (let j = 1; j < uArrayDifferenceTableArray.length; j++) {
    result +=
      (getPerm(pxConstant, j).toFixed(2) * uArrayDifferenceTableArray[j][0]) /
      getFactorial(j);
  }
  console.log(result);
}

generateDifferenceTable();
newtonForwardEval(1895);
