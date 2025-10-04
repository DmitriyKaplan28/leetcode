/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0;

  const min = Math.min(...nums);
  const max = Math.max(...nums);

  if (min === max) return 0;

  const n = nums.length;
  const bucketSize = Math.max(1, Math.floor((max - min) / (n - 1)));
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;

  const buckets = Array(bucketCount)
    .fill(null)
    .map(() => ({
      min: Infinity,
      max: -Infinity,
      used: false,
    }));

  for (const num of nums) {
    const bucketIndex = Math.floor((num - min) / bucketSize);
    const bucket = buckets[bucketIndex];
    bucket.min = Math.min(bucket.min, num);
    bucket.max = Math.max(bucket.max, num);
    bucket.used = true;
  }

  let maxGap = 0;
  let prevBucketMax = min;

  for (const bucket of buckets) {
    if (bucket.used) {
      maxGap = Math.max(maxGap, bucket.min - prevBucketMax);
      prevBucketMax = bucket.max;
    }
  }

  return maxGap;
};

console.log(maximumGap([3, 6, 9, 1]));
console.log(maximumGap([10]));
