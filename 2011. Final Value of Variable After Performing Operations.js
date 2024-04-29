/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let res = 0;
    for (let operation of operations) {
        if (operation === '++X' || operation === 'X++') res++;
        else res--;
    }
    return res;
};