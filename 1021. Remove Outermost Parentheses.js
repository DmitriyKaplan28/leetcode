/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function(s) {
    let res = ''
    let count = 0
    for (let char of s) {
      if (char === '(' && count > 0) res += '(' 
      if (char === ')' && count > 1) res += ')'
      char === '(' ? count++ : count--
    }
    return res
  }