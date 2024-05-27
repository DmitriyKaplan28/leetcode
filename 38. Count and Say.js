/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let temp = "1";

  for (let i = 1; i < n; i++) {
    let arr = temp.split("");

    temp = "";
    let count = 1;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] != arr[j + 1]) {
        temp += count + arr[j];
        count = 1;
      } else {
        count++;
      }
    }
  }

  return temp;
};

console.log(countAndSay(4));
