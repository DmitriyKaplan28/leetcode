/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const events = [];
  const res = [];

  for (const [left, right, height] of buildings) {
    events.push([left, -height]);
    events.push([right, height]);
  }

  events.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  const heights = [0];
  let prevMaxHeight = 0;

  for (const [x, h] of events) {
    if (h < 0) {
      heights.push(-h);
    } else {
      const index = heights.indexOf(h);
      if (index > -1) heights.splice(index, 1);
    }

    const currentMaxHeight = Math.max(...heights);

    if (currentMaxHeight !== prevMaxHeight) {
      res.push([x, currentMaxHeight]);
      prevMaxHeight = currentMaxHeight;
    }
  }

  return res;
};

console.log(getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]));
console.log(getSkyline([[0,2,3],[2,5,3]]));

