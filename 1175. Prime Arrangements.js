/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  const mod = 1000000007n;

  const countPrimes = (x) => {
    let count = 0;
    for (let i = 2; i <= x; i++) {
      let prime = true;
      for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
          prime = false;
          break;
        }
      }
      if (prime) count++;
    }
    return count;
  };

  const fact = (x) => {
    let res = 1n;
    for (let i = 2n; i <= BigInt(x); i++) {
      res = (res * i) % mod;
    }
    return res;
  };

  const p = countPrimes(n);
  return Number((fact(p) * fact(n - p)) % mod);
};
