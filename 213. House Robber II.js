/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    if (n === 1) return nums[0];

    const solve = (l, r) => {
        let prev = 0;
        let curr = 0;
        for (let i = l; i <= r; i++) {
            const next = Math.max(curr, prev + nums[i]);
            prev = curr;
            curr = next;
        }
        return curr;
    };

    return Math.max(solve(0, n - 2), solve(1, n - 1));
};
