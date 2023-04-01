class Prime {
  constructor() {
    this.generated = [];
    this.maxPossibleByLimit = 99999999;
  }

  _primeLoop(cutoff) {
    for (let j = 2; j < cutoff; j++) {
      if (cutoff % j == 0) {
        return false;
      }
    }
    return true;
  }

  _coPrimeLoop(initial, cutoff) {
    for (let j = 2; j < cutoff; j++) {
      if (initial % j === 0 && cutoff % j === 0) {
        return false;
      }
    }
    return true;
  }

  _primeGen(single, rand = 1, limit = Infinity) {
    this.generated = [];
    for (let i = rand, count = 0; count < limit; i++) {
      if (i >= this.maxPossibleByLimit) return "No result";
      let prime = this._primeLoop(i);
      if (prime) {
        if (single) return i;
        this.generated.push(i);
        count++;
      }
    }
  }

  _coPrimeGen(single, rand = 1, limit = Infinity) {
    this.generated = [];
    for (let i = rand, count = 0; count < limit; i++) {
      if (i >= this.maxPossibleByLimit) return "No result";

      for (let k = i + 1; k < limit; k++) {
        let coPrime = this._coPrimeLoop(i, k);
        let bothPrime = this._primeLoop(i) && this._primeLoop(k);

        if (coPrime && bothPrime) {
          if (single) return [i, k];
          this.generated.push([i, k]);
          count++;
        }
      }
    }
  }

  getSinglePrime() {
    return this._primeGen(true);
  }

  getSingleRandomPrime() {
    return this._primeGen(
      true,
      (Math.random() * (this.maxPossibleByLimit - 1) + 1).toFixed()
    );
  }

  getSingleRandomPrimeRange(lowerrange, upperrange) {
    return this._primeGen(
      true,
      (Math.random() * (upperrange - lowerrange) + lowerrange).toFixed(),
      upperrange
    );
  }

  getPrimeList(limit) {
    this._primeGen(false, 1, limit);
    return this.generated;
  }

  isPrime(cutoff) {
    return this._primeLoop(cutoff);
  }

  getSingleCoPrime() {
    return this._coPrimeGen(true);
  }

  getSingleRandomCoPrime() {
    return this._coPrimeGen(
      true,
      (Math.random() * (this.maxPossibleByLimit - 1) + 1).toFixed()
    );
  }

  getSingleRandomCoPrimeRange(lowerrange, upperrange) {
    return this._coPrimeGen(
      true,
      (Math.random() * (upperrange - lowerrange) + lowerrange).toFixed(),
      upperrange
    );
  }

  getCoPrimeList(limit) {
    this._coPrimeGen(false, 1, limit);
    return this.generated;
  }

  isCoPrime(initial, cutoff) {
    return this._coPrimeLoop(initial, cutoff);
  }
}

class Fibonacci {
  constructor() {
    this.series = [0, 1];
    this.maxPossibleByLimit = 9999999;
  }

  _fibGen(fib1 = -1, fib2 = 1, n, limit = Infinity, nth = 3) {
    let fib3 = fib1 + fib2;

    if (fib3 >= limit) return;
    this.series.push(fib3);

    if (nth >= n) {
      return n;
    }

    return this._fibGen(fib2, fib3, n, limit, ++nth);
  }

  getFibSeries(limit) {
    this.series = [0, 1];
    this._fibGen(0, 1, Infinity, limit);
    return this.series;
  }

  getNthFib(limit) {
    this.series = [0, 1];

    let index = this._fibGen(0, 1, limit);

    return this.series[index - 1];
  }
}

class Factor {
  _cutFactor(numbers) {
    for (let i = 0; i <= numbers[numbers.length - 1]; i++) {
      if (numbers[i] > 1) {
        return true;
      }
    }
    return false;
  }

  _cutFactorOnce(numbers) {
    for (let i = 0; i <= numbers[numbers.length - 1]; i++) {
      if (numbers[i] === 1) {
        return false;
      }
    }
    return true;
  }

  _lcm(numbers) {
    let lcm = 1;

    while (this._cutFactor(numbers)) {
      numbers.sort();

      for (let i = 2; i <= numbers[numbers.length - 1]; i++) {
        let passCheck = false;
        for (let j = 0; j < numbers.length; j++) {
          if (numbers[j] % i === 0) {
            numbers[j] /= i;
            passCheck = true;
          }
        }

        if (passCheck) {
          lcm *= i;
          console.log(numbers, i);
        }
      }
    }

    return lcm;
  }

  _gcd(numbers) {
    let gcd = 1;

    while (this._cutFactorOnce(numbers)) {
      numbers.sort();
      for (let i = 2; i <= numbers[numbers.length - 1]; i++) {
        let passCheck = true;
        for (let j = 0; j < numbers.length; j++) {
          if (numbers[j] % i !== 0) {
            passCheck = false;
            break;
          }
          numbers[j] /= i;
        }

        if (passCheck) {
          gcd *= i;
        }
      }
    }

    return gcd;
  }

  getLcm(numbers) {
    return this._lcm(numbers);
  }

  getGcd(numbers) {
    return this._gcd(numbers);
  }
}

let dictionary = {};

function populateDictionary() {
  for (let i = 1; i < 26; i++) {
    dictionary[String.fromCharCode(96 + i)] = i;
  }
}

function findExponent(key, prime) {
  for (let i = 2; i < key; i++) {
    if (prime.isCoPrime(i, key)) return i;
  }
}

function numberifyMessage(message) {
  let msg = "";
  for (let i = 0; i < message.length; i++) {
    msg += dictionary[message[i]];
  }
  return msg;
}

function RSA() {
  populateDictionary();

  let newPrime = new Prime();

  let coPrimes = newPrime.getSingleRandomCoPrimeRange(500, 1000);
  console.log(coPrimes);

  let prime1 = coPrimes[0];
  let prime2 = coPrimes[1];
  console.log(newPrime.isCoPrime(prime1, prime2));

  let firstPartOfKey = prime1 * prime2;

  let phi = (prime1 - 1) * (prime2 - 1);
  let exponent = findExponent(phi, newPrime);

  // let constant = (Math.random() * (100 - 1) + 1).toFixed();
  let constant = 3;
  let decryption = ((1 + constant * phi) / exponent).toFixed();

  let message = "hi";

  message = numberifyMessage(message);

  //bigint operations
  firstPartOfKey = BigInt(firstPartOfKey);
  let ciphertext = BigInt(Math.pow(+message, exponent)) % firstPartOfKey;

  let plaintext = ciphertext ** BigInt(decryption) % firstPartOfKey;

  //let plaintext = ciphertext ** decryption % firstPartOfKey;
  console.log(ciphertext, plaintext, message);

  console.log(
    prime1,
    prime2,
    firstPartOfKey,
    phi,
    exponent,
    constant,
    phi,
    decryption,
    ciphertext,
    plaintext
  );
}

RSA();
