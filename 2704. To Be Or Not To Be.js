/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: (secondVal) => {
            if (val === secondVal) { return true }
            throw 'Not Equal'
        },
        notToBe: (thirdVal) => {
            if (val !== thirdVal) { return true }
            throw 'Equal'
        }
    }
};
