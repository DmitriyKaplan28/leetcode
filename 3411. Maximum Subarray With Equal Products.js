/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function (nums) {
    const gcd = (a, b) => {
        while (b !== 0n) {
            const t = a % b;
            a = b;
            b = t;
        }
        return a;
    };

    const lcm = (a, b) => (a / gcd(a, b)) * b;

    const n = nums.length;
    let best = 1;

    for (let i = 0; i < n; i++) {
        let prod = 1n;
        let g = 0n;
        let l = 1n;

        for (let j = i; j < n; j++) {
            const x = BigInt(nums[j]);
            prod *= x;
            g = g === 0n ? x : gcd(g, x);
            l = lcm(l, x);

            if (prod === l * g) {
                const len = j - i + 1;
                if (len > best) best = len;
            }
        }
    }

    return best;
};