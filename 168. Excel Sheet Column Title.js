/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let res = "";
  while (columnNumber > 0) {
    columnNumber--;
    const charCode = (columnNumber % 26) + "A".charCodeAt(0);
    res = String.fromCharCode(charCode) + res;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res;
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
