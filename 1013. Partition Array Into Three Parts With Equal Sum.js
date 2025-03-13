/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let totalSum = arr.reduce((sum, num) => sum + num, 0);
    if (totalSum % 3 !== 0) return false; 
    let targetSum = totalSum / 3;
    let partitionSum = 0, count = 0;

    for (let i = 0; i < arr.length; i++) {

        partitionSum += arr[i];

        if (partitionSum === targetSum) {
            count++;
            partitionSum = 0;
        }

        if (count === 2 && i < arr.length - 1) {
            return true; 
        }
    }
    return false
};
