/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function (nums, k) {
    const a = [...nums].sort((x, y) => x - y);
    let sumSmallest = 0;
    let sumLargest = 0;
    for (let i = 0; i < k; i++) {
        sumSmallest += a[i];
        sumLargest += a[a.length - 1 - i];
    }
    return sumLargest - sumSmallest;
};

console.log(absDifference([5, 2, 2, 4], 2));
console.log(absDifference([100], 1));