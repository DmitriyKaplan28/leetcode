/**
 * @param {number[]} nums
 * @return {number}
 */
var maxPairStrength = function(nums) {
    let ans = 0n;

    const gcd = (a, b) => {
        while (b !== 0n) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let a = BigInt(nums[i]);
            let b = BigInt(nums[j]);

            const g = gcd(a < 0n ? -a : a, b < 0n ? -b : b);
            const strength = (a * b) / (g * g);

            if (strength > ans) {
                ans = strength;
            }
        }
    }

    return Number(ans);
};
