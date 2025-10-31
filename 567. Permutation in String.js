/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const aCharCode = "a".charCodeAt(0);
  const need = new Array(26).fill(0);
  const window = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    need[s1.charCodeAt(i) - aCharCode]++;
    window[s2.charCodeAt(i) - aCharCode]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (need[i] === window[i]) matches++;
  }

  if (matches === 26) return true;

  for (let right = s1.length; right < s2.length; right++) {
    const left = right - s1.length;

    const idxAdd = s2.charCodeAt(right) - aCharCode;
    const idxRemove = s2.charCodeAt(left) - aCharCode;

    window[idxAdd]++;
    if (window[idxAdd] === need[idxAdd]) {
      matches++;
    } else if (window[idxAdd] === need[idxAdd] + 1) {
      matches--;
    }

    window[idxRemove]--;
    if (window[idxRemove] === need[idxRemove]) {
      matches++;
    } else if (window[idxRemove] === need[idxRemove] - 1) {
      matches--;
    }

    if (matches === 26) return true;
  }

  return false;
};


console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));