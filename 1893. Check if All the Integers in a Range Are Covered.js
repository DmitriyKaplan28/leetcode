/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  for (let i = left; i <= right; i++) {
    let covered = false;
    for (const [start, end] of ranges) {
      if (i >= start && i <= end) {
        covered = true;
        break;
      }
    }
    if (!covered) return false;
  }
  return true;
};
console.log(
  isCovered(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    2,
    5
  )
);
console.log(
  isCovered(
    [
      [1, 10],
      [10, 20],
    ],
    21,
    21
  )
);
