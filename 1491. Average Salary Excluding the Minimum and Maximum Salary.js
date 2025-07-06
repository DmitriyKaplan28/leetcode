/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  const min = Math.min(...salary);
  const max = Math.max(...salary);
  const total = salary.reduce((sum, sal) => sum + sal, 0);
  const adjustedTotal = total - min - max;
  const average = adjustedTotal / (salary.length - 2);
  return average;  
};
