/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
    const freq = new Array(24).fill(0);
    let ans = 0;

    for (const h of hours) {
        const r = ((h % 24) + 24) % 24;
        const need = (24 - r) % 24;
        ans += freq[need];
        freq[r]++;
    }

    return ans;
};