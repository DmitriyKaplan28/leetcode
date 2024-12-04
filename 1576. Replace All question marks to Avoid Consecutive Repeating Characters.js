/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  const n = s.length;
  const arr = s.split("");

  for (let i = 0; i < n; i++) {
    if (arr[i] === "?") {
      for (let char of "abc") {
        if (
          (i > 0 && arr[i - 1] === char) ||
          (i < n - 1 && arr[i + 1] === char)
        ) {
          continue;
        }
        arr[i] = char;
        break;
      }
    }
  }

  return arr.join("");
};
