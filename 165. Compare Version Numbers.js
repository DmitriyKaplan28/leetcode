/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const revs1 = version1.split(".").map(Number);
  const revs2 = version2.split(".").map(Number);

  const maxLength = Math.max(revs1.length, revs2.length);

  for (let i = 0; i < maxLength; i++) {
    const rev1 = revs1[i] || 0;
    const rev2 = revs2[i] || 0;

    if (rev1 < rev2) {
      return -1;
    } else if (rev1 > rev2) {
      return 1;
    }
  }

  return 0;
};
