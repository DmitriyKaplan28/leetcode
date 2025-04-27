/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
  const arr = s.split("");
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    const current = parseInt(arr[i]);
    const next = parseInt(arr[i + 1]);

    if (current % 2 === next % 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        return arr.join("");
      }
    }
  }

  return s;
};
