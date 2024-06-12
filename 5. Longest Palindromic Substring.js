/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let startIndex = 0;
  let maxLength = 1;

  function expandAroundMiddle(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;

      // Used in the slice method for return
      if (currentLength > maxLength) {
        maxLength = currentLength;
        startIndex = left;
      }

      console.log(left, right);

      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundMiddle(i - 1, i + 1);
    expandAroundMiddle(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLength);
};
