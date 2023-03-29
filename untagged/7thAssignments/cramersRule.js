let matrixEval = function (matrix = []) {
  let sum = 0;

  sum +=
    matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]);

  sum -=
    matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]);

  sum -=
    matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);

  return sum;
};

function copyMatrix(matrix) {
  var newMatrix = [];

  for (var i = 0; i < matrix.length; i++) newMatrix[i] = matrix[i].slice();

  return newMatrix;
}

function swapColumn(matrix = [], init, cutoff) {
  matrixBackup = copyMatrix(matrix);
  for (let i = 0; i < 3; i++) {
    let backup = matrixBackup[i][cutoff];
    matrixBackup[i][cutoff] = matrixBackup[i][init];
    matrixBackup[i][init] = backup;
  }
  return matrixBackup;
}

// let matrix = [
//   [1, 2, 3, 1],
//   [1, 1, 1, 2],
//   [2, 2, 2, 3],
// ];
// let matrix = [
//   [4, 0, 0, 1],
//   [0, 2, 0, 2],
//   [0, 0, 1, 4],
// ];
let matrix = [
  [1, 0, 0, 1],
  [0, 1, 0, 0],
  [0, 0, -1, 0],
];

function cramersRule(matrix) {
  let d = matrixEval(matrix);

  let matrixVariationX = swapColumn(matrix, 0, 3);
  let dx = matrixEval(matrixVariationX);

  let matrixVariationY = swapColumn(matrix, 1, 3);
  let dy = matrixEval(matrixVariationY);

  let matrixVariationZ = swapColumn(matrix, 2, 3);
  let dz = matrixEval(matrixVariationZ);

  console.log(dx, dy, dz, d);
  if (d === 0) {
    console.log("No unique solutions!");
    return;
  }
  console.log("Unique solutions : ", dx / d, dy / d, dz / d);
}

cramersRule(matrix);
