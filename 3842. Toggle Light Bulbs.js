/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function (bulbs) {
    const on = new Array(101).fill(false);
    for (const b of bulbs) {
        on[b] = !on[b];
    }
    const result = [];
    for (let i = 1; i <= 100; i++) {
        if (on[i]) result.push(i);
    }
    return result;
};