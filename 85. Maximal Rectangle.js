/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  const heights = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === "1") {
        heights[i][j] = i === 0 ? 1 : heights[i - 1][j] + 1;
      } else {
        heights[i][j] = 0;
      }
    }
  }

  const largestRectangleArea = (heights) => {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
      const height = i === heights.length ? 0 : heights[i];

      while (stack.length > 0 && height < heights[stack[stack.length - 1]]) {
        const h = heights[stack.pop()];
        const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, h * w);
      }

      stack.push(i);
    }

    return maxArea;
  };

  let maxArea = 0;
  for (let i = 0; i < rows; i++) {
    maxArea = Math.max(maxArea, largestRectangleArea(heights[i]));
  }

  return maxArea;
};

console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);
console.log(maximalRectangle([["0"]]));
console.log(maximalRectangle([["1"]]));
