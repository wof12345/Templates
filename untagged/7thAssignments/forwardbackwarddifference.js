//difference table
let uArrayX = [1891, 1901, 1911, 1921, 1931];
let uArrayY = [46, 66, 81, 93, 101];

let xDifferenceInterval = uArrayX[1] - uArrayX[0];

let uArrayDifferenceTableArray = [[...uArrayY]];

function generateDifferenceTable() {
  for (let j = 0; j < uArrayX.length - 1; j++) {
    for (let i = 0; i < uArrayY.length - 1; i++) {
      uArrayY[i] = uArrayY[i + 1] - uArrayY[i];
    }
    uArrayY.pop();

    uArrayDifferenceTableArray.push([...uArrayY]);
  }
  console.log(uArrayDifferenceTableArray);
}
