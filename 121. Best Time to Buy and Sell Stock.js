/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  let maxProfit = 0;
  let minPrice = prices[0];
  for (const price of prices) {
    if (price < minPrice) minPrice = price;
    if (price - minPrice > maxProfit) maxProfit = price - minPrice;
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
