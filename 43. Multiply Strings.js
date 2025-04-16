/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const m = num1.length;
  const n = num2.length;
  const result = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const product = (num1[i] - "0") * (num2[j] - "0");
      const sum = result[i + j + 1] + product;

      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  let start = 0;
  while (start < result.length && result[start] === 0) {
    start++;
  }

  return result.slice(start).join("");
};

console.log(multiply("2", "3"));
console.log(multiply("123", "456"));
console.log(multiply("123456789", "987654321"));
