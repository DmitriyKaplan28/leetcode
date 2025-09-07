/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let totalSeconds = 0;
  const target = tickets[k];
  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      totalSeconds += Math.min(tickets[i], target);
    } else {
      totalSeconds += Math.min(tickets[i], target - 1);
    }
  }
  return totalSeconds;
};
