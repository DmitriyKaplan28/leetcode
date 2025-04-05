/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;

    for (let x = 0; x <= n; x++) {
        let count = nums.filter(num => num >= x).length;
        if (count === x) return x;
    }

    return -1;
};
