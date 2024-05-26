/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  return calculateFibonacci(n);
};

function calculateFibonacci(n) {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}
