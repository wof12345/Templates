//GFG
//Javascript code for this approach
function gcd(a, h) {
  /*
   * This function returns the gcd or greatest common
   * divisor
   */
  let temp;
  while (true) {
    temp = a % h;
    if (temp == 0) return h;
    a = h;
    h = temp;
  }
}

let p = 3;
let q = 7;

// Stores the first part of public key:
let n = p * q;

// Finding the other part of public key.
// e stands for encrypt
let e = 2;
let phi = (p - 1) * (q - 1);
while (e < phi) {
  /*
   * e must be co-prime to phi and
   * smaller than phi.
   */
  if (gcd(e, phi) == 1) break;
  else e++;
}
let k = 2; // A constant value
let d = (1 + k * phi) / e;

// Message to be encrypted
let msg = 23;

console.log("Message data = " + msg);

// Encryption c = (msg ^ e) % n
let c = Math.pow(msg, e);
c = c % n;
console.log("Encrypted data = " + c);

// Decryption m = (c ^ d) % n
let m = Math.pow(c, d);
m = m % n;
console.log("Original Message Sent = " + m);

//This code is written by Sundaram
