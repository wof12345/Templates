//lagrange inverse
let uArrayX = [162, 120, 72, 63];
let uArrayY = [3, 7, 9, 10];

function upperEval(x, index) {
  let result = 1;
  for (let i = 0; i < uArrayY.length; i++) {
    if (i !== index) {
      result *= x - uArrayY[i];
    }
  }
  return result;
}

function lowerEval(index) {
  let result = 1;
  for (let i = 0; i < uArrayY.length; i++) {
    if (i !== index) {
      result *= uArrayY[index] - uArrayY[i];
    }
  }
  return result;
}

// console.log(lowerEval(0));

function lagrangeEval(x) {
  let result = 0;
  for (let i = 0; i < uArrayX.length; i++) {
    let currentEval = (upperEval(x, i) / lowerEval(i)) * uArrayX[i];
    result += Math.round(currentEval);
  }
  console.log(result);
}

lagrangeEval(6);
