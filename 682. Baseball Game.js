/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let res = [];
  
  for (let i = 0; i < operations.length; i++) {
    const n = res.length;
    switch (operations[i]) {
      case "+":
        res.push(res[n - 1] + res[n - 2]);
        break;
      case "D":
        res.push(res[n - 1] * 2);
        break;
      case "C":
        res.pop();
        break;
      default:
        res.push(+operations[i]);
    }
  }
  return res.length ? res.reduce((a,b) => a+b) : 0
};

console.log(calPoints(["5","2","C","D","+"]))
