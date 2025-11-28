/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  const sorted = [...prices].sort((a, b) => a - b);
  const twoCheapest = sorted[0] + sorted[1];

  if (twoCheapest <= money) {
    return money - twoCheapest;
  }

  return money;
};
