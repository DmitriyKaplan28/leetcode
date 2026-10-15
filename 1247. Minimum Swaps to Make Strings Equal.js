/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function (s1, s2) {
  let xy = 0;
  let yx = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;

    if (s1[i] === "x") {
      xy++;
    } else {
      yx++;
    }
  }

  if ((xy + yx) % 2 !== 0) return -1;

  return Math.floor(xy / 2) + Math.floor(yx / 2) + (xy % 2) * 2;
};
