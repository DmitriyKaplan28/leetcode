/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    const indicesA = findAllOccurrences(s, "a")
    const indicesB = findAllOccurrences(s, "b")
    if (!indicesA.length || !indicesB.length) return true
    return indicesA[indicesA.length-1] < indicesB[0]
};

const findAllOccurrences = (str, substr) => {
    str = str.toLowerCase();
    
    let result = [];
  
    let idx = str.indexOf(substr)
    
    while (idx !== -1) {
      result.push(idx);
      idx = str.indexOf(substr, idx+1);
    }
    return result;
  }