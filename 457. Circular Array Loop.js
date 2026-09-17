/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    const n = nums.length;
    const next = i => ((i + nums[i]) % n + n) % n;

    for (let i = 0; i < n; i++) {
        const direction = nums[i] > 0;
        let slow = i;
        let fast = i;

        while (true) {
            const nextSlow = next(slow);
            if ((nums[nextSlow] > 0) !== direction || nextSlow === slow) break;

            const nextFast = next(fast);
            if ((nums[nextFast] > 0) !== direction || nextFast === fast) break;

            const nextFast2 = next(nextFast);
            if ((nums[nextFast2] > 0) !== direction || nextFast2 === nextFast) break;

            slow = nextSlow;
            fast = nextFast2;

            if (slow === fast) return true;
        }
    }

    return false;
};
