/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i <= s.length - 3; i++) {
    const substring = s.substring(i, i + 3);

    const charSet = new Set(substring);
    if (charSet.size === 3) {
      count++;
    }
  }

  return count;
};
