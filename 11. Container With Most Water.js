/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;

  let res = 0;
  let temp;

  while (start < end) {
    temp = Math.min(height[start], height[end]) * (end - start);

    if (temp > res) {
      res = temp;
    }

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
