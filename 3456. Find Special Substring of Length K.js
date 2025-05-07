/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function (s, k) {
  if (s.length < k) return false;

  for (let i = 0; i <= s.length - k; i++) {
    const substring = s.substring(i, i + k);
    const char = substring[0];

    let allSame = true;
    for (let j = 1; j < k; j++) {
      if (substring[j] !== char) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      const beforeChar = i > 0 ? s[i - 1] : null;
      const afterChar = i + k < s.length ? s[i + k] : null;

      if (
        (beforeChar === null || beforeChar !== char) &&
        (afterChar === null || afterChar !== char)
      ) {
        return true;
      }
    }
  }

  return false;
};
