let number = "3.0000043050";

let numberOfSignifiacant = 0;
let afterDecimal = false;
let isSignificant = false;
for (let i = 0; i < number.length; i++) {
  if (number[i] === ".") afterDecimal = true;

  if (afterDecimal && number[i] !== "0" && number[i] !== ".") {
    // console.log(number[i]);

    isSignificant = true;
  }

  if (isSignificant) {
    numberOfSignifiacant++;
  }
}

console.log(numberOfSignifiacant);
