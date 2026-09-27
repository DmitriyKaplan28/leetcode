/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let result = 0;

  for (let i = 0; i < points.length; i++) {
    const distances = new Map();

    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;

      const dx = points[i][0] - points[j][0];
      const dy = points[i][1] - points[j][1];
      const distance = dx * dx + dy * dy;
      const count = distances.get(distance) || 0;

      result += count * 2;
      distances.set(distance, count + 1);
    }
  }

  return result;
};
