/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;

  const diffIndices = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diffIndices.push(i);
    }
  }

  if (diffIndices.length > 2) return false;

  if (diffIndices.length === 2) {
    const [i, j] = diffIndices;
    return s1[i] === s2[j] && s1[j] === s2[i];
  }

  return false;
};
