/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const sumAccounts = accounts.map((account) =>
    account.reduce((acc, number) => acc + number)
  );
  const maxValue = Math.max.apply(null, sumAccounts);
  return maxValue;
};
