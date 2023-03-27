class Prime {
  constructor() {
    this.generated = [];
    this.maxPossibleByLimit = 9999999;
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

        if (coPrime) {
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
  _fibGen() {}
}

let newPrime = new Prime();
console.log(newPrime.isPrime(29));

// export default newPrime;
