/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
     if (s[i] === "(") {
       depth++;
     }
     if (s[i] === ")") {
       depth--;
     }
     if (max < depth) {
       max = depth;
     }
    }
    return max;