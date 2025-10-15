/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  const counts = new Array(10).fill(0);
  for (const d of digits) counts[d]++;

  const result = [];
  for (let n = 100; n <= 998; n += 2) {
    const a = Math.floor(n / 100);
    const b = Math.floor((n / 10) % 10);
    const c = n % 10;

    const need = new Array(10).fill(0);
    need[a]++;
    need[b]++;
    need[c]++;

    let ok = true;
    for (let d = 0; d <= 9; d++) {
      if (need[d] > counts[d]) {
        ok = false;
        break;
      }
    }
    if (ok) result.push(n);
  }
  return result;
};
