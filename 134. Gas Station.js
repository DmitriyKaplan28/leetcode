/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let currentGas = 0;
  let startStation = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i];
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      startStation = i + 1;
      currentGas = 0;
    }
  }

  return totalGas >= 0 ? startStation : -1;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
