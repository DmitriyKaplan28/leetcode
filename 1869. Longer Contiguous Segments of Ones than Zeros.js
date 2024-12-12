/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let maxOnes = 0,
    maxZeros = 0;
  let currentOnes = 0,
    currentZeros = 0;

  for (let char of s) {
    if (char === "1") {
      currentOnes++;
      maxZeros = Math.max(maxZeros, currentZeros);
      currentZeros = 0;
    } else {
      currentZeros++;
      maxOnes = Math.max(maxOnes, currentOnes);
      currentOnes = 0;
    }
  }

  maxOnes = Math.max(maxOnes, currentOnes);
  maxZeros = Math.max(maxZeros, currentZeros);

  return maxOnes > maxZeros;
};
