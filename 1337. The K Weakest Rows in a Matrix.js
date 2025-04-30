/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const rowsWithStrength = mat.map((row, index) => {

    let left = 0, right = row.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (row[mid] === 1) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return [index, left];
  });

  rowsWithStrength.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  return rowsWithStrength.slice(0, k).map(item => item[0]);
};
