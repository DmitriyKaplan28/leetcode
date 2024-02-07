/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let countCalls = 0
    return function() {
        return n + countCalls++
    };
};