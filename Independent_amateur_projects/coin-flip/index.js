let coin = GETDOMQUERY(`.main_inner`);
let flipButton = GETDOMQUERY(".flip");
let trans = 0.8;
let transBackup = 0;
let interval = 0;
let i = 0;
let lastGen = 0;

let angle = 0;
let target = 0;

function flipHalf(chance, flipRange) {
  return new Promise((resolve, reject) => {
    interval = setInterval(() => {
      if (i < flipRange) {
        trans -= 0.02;
        if (trans < 0.2) trans = 0.2;
        angle += 180;
        // console.log(flipRange, chance, trans, angle);

        APPLYSTYLES(
          [coin],
          [`transform:rotateY(${angle}deg); transition: transform ${trans}s;`]
        );
        i++;
      } else {
        clearInterval(interval);
        interval = null;
        i = 0;
        if (chance) {
          target = 0;
          console.log("heads");
        } else {
          target = 180;
          console.log("tails");
          transBackup = trans;
          console.log("middle");

          trans = 0.1;
        }
        resolve(0);
      }
    }, trans * 10);
  });
}

coin.addEventListener("click", () => {
  console.log(i);

  i = lastGen;
});

flipButton.addEventListener("click", () => {
  let flipRange = GENERATERANDOMNUMBER([], 300, 600, "integer");
  lastGen = flipRange;
  let chance = GENERATERANDOMNUMBER([], 0, 1, "integer");

  trans *= flipRange / 40;

  flipHalf(chance, flipRange).then((result) => {
    if (!result) {
      interval = setInterval(() => {
        if (i === 0) trans = transBackup;
        if (angle > target) {
          trans += 0.02;
          angle -= 180;
          //   console.log(flipRange, chance, trans, angle);

          APPLYSTYLES(
            [coin],
            [`transform:rotateY(${angle}deg); transition: transform ${trans}s;`]
          );
          i++;
        } else {
          clearInterval(interval);
          interval = null;
          target = 0;
          trans = 1;
          i = 0;
        }
      }, trans * 10);
    }
  });

  //   console.log(trans);

  //   setTimeout(() => {
  //     APPLYSTYLES(
  //       [coin],
  //       [`transform:rotateY(${angle}deg);transform ${trans}s;`]
  //     );
  //   }, trans * 100 * trans * 1);

  //   angle = 0;
});
