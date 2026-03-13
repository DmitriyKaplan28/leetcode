/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
    const ans = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        const p = BigInt(nums[i]);

        if (p === 2n) {
            ans[i] = -1;
            continue;
        }

        let x = p;
        let trailingOnes = 0n;
        while ((x & 1n) === 1n) {
            trailingOnes++;
            x >>= 1n;
        }

        const t = trailingOnes - 1n;
        const a = p - (1n << t);
        ans[i] = Number(a);
    }

    return ans;
};