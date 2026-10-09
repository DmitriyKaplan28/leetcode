/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  const factorial = [1];
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }

  let target = k - 1;
  let result = "";

  for (let i = 0; i < n; i++) {
    const fact = factorial[n - 1 - i];
    const index = Math.floor(target / fact);
    target %= fact;

    result += nums[index];
    nums.splice(index, 1);
  }

  return result;
};
console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));
console.log(getPermutation(3, 1));
