/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    const m = primes.length;
    const ugly = new Array(n);
    const idx = new Array(m).fill(0);
    const next = primes.slice();

    ugly[0] = 1;

    for (let i = 1; i < n; i++) {
        let min = next[0];
        for (let j = 1; j < m; j++) {
            if (next[j] < min) min = next[j];
        }
        ugly[i] = min;
        for (let j = 0; j < m; j++) {
            if (next[j] === min) {
                idx[j]++;
                next[j] = ugly[idx[j]] * primes[j];
            }
        }
    }

    return ugly[n - 1];
};
