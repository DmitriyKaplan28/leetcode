/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  const parsed = transactions.map((transaction) => {
    const [name, time, amount, city] = transaction.split(",");
    return { name, time: Number(time), amount: Number(amount), city };
  });
  const invalid = new Array(transactions.length).fill(false);

  for (let i = 0; i < parsed.length; i++) {
    if (parsed[i].amount > 1000) {
      invalid[i] = true;
    }

    for (let j = i + 1; j < parsed.length; j++) {
      if (
        parsed[i].name === parsed[j].name &&
        parsed[i].city !== parsed[j].city &&
        Math.abs(parsed[i].time - parsed[j].time) <= 60
      ) {
        invalid[i] = true;
        invalid[j] = true;
      }
    }
  }

  return transactions.filter((_, index) => invalid[index]);
};
