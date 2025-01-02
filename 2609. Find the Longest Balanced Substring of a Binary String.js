/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  let zeroCount = 0;
  let oneCount = 0;

  let maxLength = 0;

  for (const char of s) {
    if (char === "0") {
      if (oneCount > 0) {
        zeroCount = 0;
        oneCount = 0;
      }
      ++zeroCount;
    } else {
      maxLength = Math.max(maxLength, 2 * Math.min(zeroCount, ++oneCount));
    }
  }

  return maxLength;
};
