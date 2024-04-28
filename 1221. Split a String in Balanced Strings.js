/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let lCount = 0;
  let rCount = 0;
  let balancedCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") lCount++;
    if (s[i] === "R") rCount++;
    if (lCount === rCount) balancedCount++;
  }
  return balancedCount;
};
