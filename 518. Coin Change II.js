/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const combinations = new Array(amount + 1).fill(0);
  combinations[0] = 1;

  for (const coin of coins) {
    for (let total = coin; total <= amount; total++) {
      combinations[total] += combinations[total - coin];
    }
  }

  return combinations[amount];
};
