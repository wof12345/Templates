//extract number
let line = "misnf3n3b34m3m0n1";
let gotNumbers = [];

for (let i = 0; i < line.length; i++) {
  //   console.log(+line[i]);
  let tempConvertee = +line[i]; //the unary operator automatically converts string to integer
  if (!isNaN(tempConvertee)) {
    gotNumbers.push(line[i]);
  }
}
console.log(gotNumbers);
