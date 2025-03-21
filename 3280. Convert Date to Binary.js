/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  const [year, month, day] = date.split("-").map(Number);

  const binaryYear = year.toString(2);
  const binaryMonth = month.toString(2);
  const binaryDay = day.toString(2);

  return `${binaryYear}-${binaryMonth}-${binaryDay}`;
};

console.log(convertDateToBinary("2023-10-15"));
console.log(convertDateToBinary("2024-03-01"));
console.log(convertDateToBinary("2000-01-01"));
