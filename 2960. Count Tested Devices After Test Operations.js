/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let testedCount = 0;
  const n = batteryPercentages.length;

  for (let i = 0; i < n; i++) {
    if (batteryPercentages[i] > 0) {
      testedCount++;

      for (let j = i + 1; j < n; j++) {
        batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
      }
    }
  }

  return testedCount;
};
console.log(countTestedDevices([1,1,2,1,3]));
console.log(countTestedDevices([0,1,2,]));