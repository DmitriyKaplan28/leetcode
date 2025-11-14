/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiag = 0;
  let maxArea = 0;

  for (let [l, w] of dimensions) {
    const diag = l * l + w * w;
    const area = l * w;

    if (diag > maxDiag) {
      maxDiag = diag;
      maxArea = area;
    } else if (diag === maxDiag && area > maxArea) {
      maxArea = area;
    }
  }

  return maxArea;
};
