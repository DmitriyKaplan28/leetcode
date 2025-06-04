/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  if (m === 0 || k === 0) return false;

  if (arr.length < m * k) return false;

  for (let i = 0; i <= arr.length - m * k; i++) {
    let isPattern = true;

    for (let j = 0; j < k; j++) {
      for (let l = 0; l < m; l++) {
        if (arr[i + l] !== arr[i + j * m + l]) {
          isPattern = false;
          break;
        }
      }
      if (!isPattern) break;
    }

    if (isPattern) return true;
  }

  return false;
};
