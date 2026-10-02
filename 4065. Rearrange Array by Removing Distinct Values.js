/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const counts = new Map();
  for (const num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  const ans = [];
  while (counts.size > 0) {
    const values = [...counts.keys()].sort((a, b) => a - b);
    for (const value of values) {
      ans.push(value);
      const remaining = counts.get(value) - 1;
      if (remaining === 0) {
        counts.delete(value);
      } else {
        counts.set(value, remaining);
      }
    }
  }

  return ans;
};
