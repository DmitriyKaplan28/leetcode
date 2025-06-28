/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let minDistance = Infinity;
  let resultIndex = -1;

  for (let i = 0; i < points.length; i++) {
    const [px, py] = points[i];

    if (px === x || py === y) {
      const distance = Math.abs(x - px) + Math.abs(y - py);

      if (distance < minDistance) {
        minDistance = distance;
        resultIndex = i;
      }
    }
  }

  return resultIndex;
};
