/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  return checkIso(s,t) && checkIso(t,s);
};

const checkIso = (arr1, arr2) => {
  const obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) obj[arr1[i]] = arr2[i];
    else if (obj[arr1[i]] !== arr2[i]) return false;
  }
  return true;
};

console.log(isIsomorphic("badc", "baba"));
