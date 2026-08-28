/**
 * @param {string} s
 * @return {number}
 */
var countValidPrefixes = function (s) {
  let zeros = 0;
  let ones = 0;
  let validPrefixes = 0;

  for (const character of s) {
    if (character === "0") {
      zeros++;
    } else {
      ones++;
    }

    if (Math.abs(zeros - ones) <= 1) {
      validPrefixes++;
    }
  }

  return validPrefixes;
};
