/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const cleanedKey = s.split("-").join("").toUpperCase();

  let res = [];
  let length = cleanedKey.length;

  let firstGroupLength = length % k || k;

  res.push(cleanedKey.slice(0, firstGroupLength));

  for (let i = firstGroupLength; i < length; i += k) {
    res.push(cleanedKey.slice(i, i + k));
  }

  return res.join("-");
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));
