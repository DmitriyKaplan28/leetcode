/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let [i, j] = [num1.length - 1, num2.length - 1];
  let difference = i - j,
    maxlength = Math.max(i, j);
  if (difference > 0) {
    num2 = "0".repeat(difference) + num2;
  } else {
    num1 = "0".repeat(Math.abs(difference)) + num1;
  }
  let res = "";
  let temp = 0;
  for (; maxlength >= 0; maxlength--) {
    let a = +num1[maxlength];
    let b = +num2[maxlength];
    let sum = a + b + temp;
    res = (sum % 10) + res;
    temp = ~~(sum / 10);
  }

  temp && (res = temp + res);
  return res;
};

//console.log(addStrings("11", "123"));
//console.log(addStrings("456", "77"));
console.log(addStrings("9333852702227987", "85731737104263"));
