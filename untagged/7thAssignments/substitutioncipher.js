let cipherText = "llxf";
let encyptIntervalMax = 24;

for (let j = 1; j < encyptIntervalMax; j++) {
  let cipherText = "";
  for (let i = 0; i < cipherText.length; i++) {
    let letter;
    let asciiCodeAtPoint = cipherText.charCodeAt(i);
    let changeTo = asciiCodeAtPoint - j;

    if (changeTo <= 98) {
      changeTo = 122 - (98 - changeTo);
    }

    letter = String.fromCharCode(changeTo);
    if (letter) cipherText += letter;
  }
  console.log(cipherText, j);
}
