/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24;
};

console.log(findDelayedArrivalTime(15, 5));
console.log(findDelayedArrivalTime(13, 11));
