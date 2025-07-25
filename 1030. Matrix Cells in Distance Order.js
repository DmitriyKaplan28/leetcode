/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const cells = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push([r, c]);
    }
  }

  cells.sort((a, b) => {
    const distA = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
    const distB = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);
    return distA - distB;
  });

  return cells;
};
