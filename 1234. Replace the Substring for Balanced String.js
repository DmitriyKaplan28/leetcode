/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  const target = s.length / 4;
  const counts = { Q: 0, W: 0, E: 0, R: 0 };

  for (const character of s) {
    counts[character]++;
  }

  if (Object.values(counts).every((count) => count === target)) {
    return 0;
  }

  let minimumLength = s.length;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    counts[s[right]]--;

    while (Object.values(counts).every((count) => count <= target)) {
      minimumLength = Math.min(minimumLength, right - left + 1);
      counts[s[left]]++;
      left++;
    }
  }

  return minimumLength;
};
