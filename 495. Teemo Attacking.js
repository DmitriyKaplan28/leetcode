/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let res = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    if (!timeSeries[i + 1]) res += duration;
    else if (timeSeries[i + 1] - timeSeries[i] >= duration) res += duration;
    else res += timeSeries[i + 1] - timeSeries[i];
  }
  return res;
};

console.log(findPoisonedDuration([1,4], 2));
console.log(findPoisonedDuration([1,2], 2));

