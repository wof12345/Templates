let uArrayX = [5, 7, 11, 13, 21];
let uArrayY = [150, 392, 1452, 2366, 9702];

let xDifferenceInterval = uArrayX[1] - uArrayX[0];

let uArrayDifferenceTableArray = [[...uArrayX], [...uArrayY]];

// let newArray = [];

// function getDifferenceFactorial(index, x) {
//   let result = x - uArrayX[0];

//   for (let i = 1; i < index; i++) {
//     result *= x - uArrayX[i];
//   }

//   return result;
// }

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

// function newtonDivideEval(x) {
//   let result = uArrayDifferenceTableArray[0][0];

//   for (let i = 1; i <= uArrayDifferenceTableArray.length - 1; i++) {
//     currentEval =
//       getDifferenceFactorial(i, x) * uArrayDifferenceTableArray[i][0];
//     result += currentEval;
//   }
//   console.log(result);
// }

generateDifferenceTable();
// newtonDivideEval(6);
