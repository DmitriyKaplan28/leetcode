/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const freq = new Map();

    for (const ch of s) {
      freq.set(ch, (freq.get(ch) || 0) + 1);
    }
  
    let result = "";
  
    for (const ch of order) {
      if (freq.has(ch)) {
        result += ch.repeat(freq.get(ch));
        freq.delete(ch);
      }
    }
  
    for (const [ch, count] of freq) {
      result += ch.repeat(count);
    }
  
    return result;
};
console.log(customSortString("cba", "abcd"));
console.log(customSortString("bcafg", "abcd"));