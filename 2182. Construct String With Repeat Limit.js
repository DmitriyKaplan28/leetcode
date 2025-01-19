/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
  const freq = Array(26).fill(0);
  for (const char of s) {
    freq[char.charCodeAt(0) - 97]++;
  }

  const result = [];
  let prevChar = null,
    prevCount = 0;

  while (true) {
    let added = false;

    for (let i = 25; i >= 0; i--) {
      if (freq[i] === 0 || (prevChar === i && prevCount === repeatLimit))
        continue;

      result.push(String.fromCharCode(i + 97));
      freq[i]--;
      if (prevChar === i) {
        prevCount++;
      } else {
        prevChar = i;
        prevCount = 1;
      }
      added = true;
      break;
    }

    if (!added) {
      for (let i = 25; i >= 0; i--) {
        if (freq[i] === 0 || prevChar === i) continue;

        result.push(String.fromCharCode(i + 97));
        freq[i]--;
        prevChar = i;
        prevCount = 1;
        added = true;
        break;
      }
    }

    if (!added) break;
  }

  return result.join("");
};
