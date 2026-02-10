/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function (nums) {
    let maxLen = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const evens = new Set();
        const odds = new Set();

        for (let j = i; j < n; j++) {
            const val = nums[j];
            if (val % 2 === 0) {
                evens.add(val);
            } else {
                odds.add(val);
            }

            if (evens.size === odds.size) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
};

console.log(longestBalanced([2, 5, 4, 3]));
console.log(longestBalanced([3, 2, 2, 5, 4]));
console.log(longestBalanced([1, 2, 3, 2]));