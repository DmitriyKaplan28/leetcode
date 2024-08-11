/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let totalSum = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    // Calculate the number of subarrays including arr[i]
    const totalSubarrays = (i + 1) * (n - i);
    // Calculate the number of odd-length subarrays including arr[i]
    const oddSubarrays = Math.floor((totalSubarrays + 1) / 2);
    // Add contribution of arr[i] to the total sum
    totalSum += oddSubarrays * arr[i];
  }
  return totalSum;
};
