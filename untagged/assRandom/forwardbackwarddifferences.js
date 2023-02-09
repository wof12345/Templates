//forward difference
let uArrayX = [1, 2, 3, 4, 5];
let uArrayY = [46, 66, 81, 93, 101];

let newArray = [];

let number = "";
console.log(uArrayY);

for (let j = 0; j < uArrayX.length - 1; j++) {
  for (let i = 0; i < uArrayY.length - 1; i++) {
    uArrayY[i] = uArrayY[i + 1] - uArrayY[i];
  }
  uArrayY.pop();

  console.log(uArrayY);
}
