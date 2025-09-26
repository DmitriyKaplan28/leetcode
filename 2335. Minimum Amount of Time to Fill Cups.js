/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    const sum = amount[0] + amount[1] + amount[2];
    const maxVal = Math.max(amount[0], amount[1], amount[2]);
    return Math.max(maxVal, Math.ceil(sum / 2));
};