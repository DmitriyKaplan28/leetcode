/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveDollars = 0;
  let tenDollars = 0;

  for (const bill of bills) {
    if (bill === 5) {
      fiveDollars++;
    } else if (bill === 10) {
      if (!fiveDollars) {
        return false;
      }
      fiveDollars--;
      tenDollars++;
    } else if (bill === 20) {
      if (tenDollars > 0 && fiveDollars > 0) {
        tenDollars--;
        fiveDollars--;
      } else if (fiveDollars >= 3) {
        fiveDollars -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};
