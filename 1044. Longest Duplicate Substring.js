/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {
  let left = 1;
  let right = s.length - 1;
  let result = "";

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const duplicate = findDuplicate(s, mid);

    if (duplicate !== "") {
      result = duplicate;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

function findDuplicate(s, length) {
  const base = 26;
  const mod = 2 ** 32;
  let hash = 0;
  let power = 1;

  for (let i = 0; i < length; i++) {
    power = (power * base) % mod;
  }

  for (let i = 0; i < length; i++) {
    hash = (hash * base + s.charCodeAt(i)) % mod;
  }

  const seen = new Map();
  seen.set(hash, 0);

  for (let i = length; i < s.length; i++) {
    hash =
      (hash * base - s.charCodeAt(i - length) * power + s.charCodeAt(i)) % mod;

    if (hash < 0) hash += mod;

    if (seen.has(hash)) {
      const start = seen.get(hash);
      const currentSubstring = s.substring(i - length + 1, i + 1);
      const previousSubstring = s.substring(start, start + length);

      if (currentSubstring === previousSubstring) {
        return currentSubstring;
      }
    }

    seen.set(hash, i - length + 1);
  }

  return "";
}

console.log(longestDupSubstring("banana"));
console.log(longestDupSubstring("abcd"));
