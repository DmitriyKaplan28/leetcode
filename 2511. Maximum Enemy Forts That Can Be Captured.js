/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    let maxCaptured = 0;
  let n = forts.length;

  for (let i = 0; i < n; i++) {
    if (forts[i] === 1) {
      for (let j = i + 1; j < n; j++) {
        if (forts[j] === 1) break;
        if (forts[j] === -1) {
          if (j - i - 1 > 0) maxCaptured = Math.max(maxCaptured, j - i - 1);
          break;
        }
        if (forts[j] !== 0) break;
      }
      for (let j = i - 1; j >= 0; j--) {
        if (forts[j] === 1) break;
        if (forts[j] === -1) {
          if (i - j - 1 > 0) maxCaptured = Math.max(maxCaptured, i - j - 1);
          break;
        }
        if (forts[j] !== 0) break;
      }
    }
  }

  return maxCaptured;
};
