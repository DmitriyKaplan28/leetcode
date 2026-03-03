/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
    const helper = (n, k) => {
        if (n === 1) return '0';

        const len = (1 << n) - 1;
        const mid = (len + 1) >> 1;
        if (k === mid) return '1';

        if (k < mid) {
            return helper(n - 1, k);
        } else {
            const mirrorPos = len - k + 1;
            const bit = helper(n - 1, mirrorPos);
            return bit === '0' ? '1' : '0';
        }
    };

    return helper(n, k);
};