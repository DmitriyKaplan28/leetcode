/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  const chars = s.split("");
  const n = s.length;

  let left = 0;
  let right = n - 1;

  while (left < right) {
    if (chars[left] !== chars[right]) {
      const smallerChar =
        chars[left] < chars[right] ? chars[left] : chars[right];
      chars[left] = smallerChar;
      chars[right] = smallerChar;
    }
    left++;
    right--;
  }

  return chars.join("");
};
