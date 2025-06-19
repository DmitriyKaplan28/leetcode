/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let totalUnits = 0;

  for (let [boxCount, unitsPerBox] of boxTypes) {
    let boxesToTake = Math.min(truckSize, boxCount);
    totalUnits += boxesToTake * unitsPerBox;
    truckSize -= boxesToTake;
    if (truckSize === 0) break;
  }

  return totalUnits;
};
