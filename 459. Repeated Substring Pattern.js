/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const doubleS = s + s;
    const trimmedDoubleS = doubleS.slice(1, -1);
    
    return trimmedDoubleS.includes(s);
};