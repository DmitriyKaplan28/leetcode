/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let maxLen = 0;

  for (let i = 0; i < rectangles.length; i++) {
    const [length, width] = rectangles[i];
    const possibleSide = Math.min(length, width);
    if (possibleSide > maxLen) {
      maxLen = possibleSide;
    }
  }

  let count = 0;
  for (let i = 0; i < rectangles.length; i++) {
    const [length, width] = rectangles[i];
    if (Math.min(length, width) === maxLen) {
      count += 1;
    }
  }

  return count;
};
