//divided difference
//https://atozmath.com/example/CONM/NumeInterPola.aspx?he=e&q=DD
let uArrayX = [300, 304, 305, 307];
let uArrayY = [2.4771, 2.4829, 2.4843, 2.4871];

let xDifferenceInterval = uArrayX[1] - uArrayX[0];

let uArrayDifferenceTableArray = [[...uArrayY]];

let newArray = [];

let number = "";

function getDifferenceFactorial(index, x) {
  let result = x - uArrayX[0];

  for (let i = 1; i < index; i++) {
    result *= x - uArrayX[i];
  }

  return result;
}

// console.log(getFactorial(3));

function generateDifferenceTable() {
  for (let j = 0, t = 0; j < uArrayX.length - 1; j++) {
    let breakPoint = 0;

    for (let i = 0; i < uArrayY.length - 1; i++) {
      uArrayY[i] = +(
        (uArrayY[i + 1] - uArrayY[i]) /
        (uArrayX[i + j + 1] - uArrayX[i])
      ).toFixed(4);
      breakPoint += uArrayY[i];
    }
    uArrayY.pop();

    uArrayDifferenceTableArray.push([...uArrayY]);
    if (breakPoint === 0) break;
  }
  console.log(uArrayDifferenceTableArray);
}

function newtonDivideEval(x) {
  let result = uArrayDifferenceTableArray[0][0];

  for (let i = 1; i <= uArrayDifferenceTableArray.length - 1; i++) {
    currentEval =
      getDifferenceFactorial(i, x) * uArrayDifferenceTableArray[i][0];
    result += currentEval;
  }
  console.log(result);
}

generateDifferenceTable();
newtonDivideEval(301);
