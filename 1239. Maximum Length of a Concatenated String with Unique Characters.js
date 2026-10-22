/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  const candidates = [];

  for (const str of arr) {
    const chars = new Set(str);
    if (chars.size === str.length) {
      candidates.push({ str, chars });
    }
  }

  let maxLength = 0;
  const used = new Set();

  const search = (index, length) => {
    maxLength = Math.max(maxLength, length);

    for (let i = index; i < candidates.length; i++) {
      const candidate = candidates[i];
      if ([...candidate.chars].some((char) => used.has(char))) {
        continue;
      }

      for (const char of candidate.chars) {
        used.add(char);
      }
      search(i + 1, length + candidate.str.length);
      for (const char of candidate.chars) {
        used.delete(char);
      }
    }
  };

  search(0, 0);
  return maxLength;
};
