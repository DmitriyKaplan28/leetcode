/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
  const n = nums.length;
  const bitCount = new Array(32).fill(0);

  function currentOR() {
    let or = 0;
    for (let i = 0; i < 32; i++) {
      if (bitCount[i] > 0) {
        or |= (1 << i);
      }
    }
    return or;
  }

  let left = 0;
  let result = Infinity;

  for (let right = 0; right < n; right++) {
    for (let i = 0; i < 32; i++) {
      if ((nums[right] >> i) & 1) {
        bitCount[i]++;
      }
    }

    while (left <= right && currentOR() >= k) {
      result = Math.min(result, right - left + 1);

      for (let i = 0; i < 32; i++) {
        if ((nums[left] >> i) & 1) {
          bitCount[i]--;
        }
      }
      left++;
    }
  }

  return result === Infinity ? -1 : result;
    
    
};
