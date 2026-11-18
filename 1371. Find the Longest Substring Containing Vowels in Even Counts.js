/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const firstSeen = new Array(32).fill(-1);
  firstSeen[0] = 0;

  let mask = 0;
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "a":
        mask ^= 1;
        break;
      case "e":
        mask ^= 2;
        break;
      case "i":
        mask ^= 4;
        break;
      case "o":
        mask ^= 8;
        break;
      case "u":
        mask ^= 16;
        break;
    }

    if (firstSeen[mask] === -1) {
      firstSeen[mask] = i + 1;
    } else {
      longest = Math.max(longest, i + 1 - firstSeen[mask]);
    }
  }

  return longest;
};
