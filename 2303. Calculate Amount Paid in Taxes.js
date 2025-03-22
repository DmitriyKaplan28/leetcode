/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
  let tax = 0;
  let prevUpper = 0;

  for (const [upper, percent] of brackets) {
      if (income <= prevUpper) break;
      let taxableIncome = Math.min(income, upper) - prevUpper;
      tax += (taxableIncome * percent) / 100;
      prevUpper = upper;
  }
  return tax; 
};
