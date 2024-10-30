/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const givenDate = new Date(date);
  const startOfYear = new Date(givenDate.getFullYear(), 0, 0);

  const diffInMilliseconds = givenDate - startOfYear;

  return Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
};
