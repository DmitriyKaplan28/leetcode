/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    const root = {};
    let max = 0;

    for (const num of nums) {
        let node = root;

        for (let bit = 31; bit >= 0; bit--) {
            const b = (num >>> bit) & 1;
            if (!node[b]) node[b] = {};
            node = node[b];
        }
    }

    for (const num of nums) {
        let node = root;
        let xor = 0;

        for (let bit = 31; bit >= 0; bit--) {
            const b = (num >>> bit) & 1;
            const opposite = b ^ 1;

            if (node[opposite]) {
                xor |= (1 << bit);
                node = node[opposite];
            } else {
                node = node[b];
            }
        }

        max = Math.max(max, xor >>> 0);
    }

    return max;
};
