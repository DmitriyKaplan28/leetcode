/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);

  const prefixSum = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSum.push(sum);
  }

  const result = [];
  for (const query of queries) {
    let left = 0,
      right = prefixSum.length - 1;
    let maxLength = 0;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (prefixSum[mid] <= query) {
        maxLength = mid + 1;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    result.push(maxLength);
  }

  return result;
};
