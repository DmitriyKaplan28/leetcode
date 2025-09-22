/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  const letterCount = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);
  for (let ch of s) {
    letterCount[ch.charCodeAt(0) - aCode]++;
  }

  const numCount = new Array(10).fill(0);

  numCount[0] = letterCount["z".charCodeAt(0) - aCode];
  numCount[2] = letterCount["w".charCodeAt(0) - aCode];
  numCount[4] = letterCount["u".charCodeAt(0) - aCode];
  numCount[6] = letterCount["x".charCodeAt(0) - aCode];
  numCount[8] = letterCount["g".charCodeAt(0) - aCode];

  numCount[3] = letterCount["h".charCodeAt(0) - aCode] - numCount[8];
  numCount[5] = letterCount["f".charCodeAt(0) - aCode] - numCount[4];
  numCount[7] = letterCount["s".charCodeAt(0) - aCode] - numCount[6];
  numCount[1] =
    letterCount["o".charCodeAt(0) - aCode] -
    numCount[0] -
    numCount[2] -
    numCount[4];
  numCount[9] =
    letterCount["i".charCodeAt(0) - aCode] -
    numCount[5] -
    numCount[6] -
    numCount[8];

  let result = "";
  for (let d = 0; d <= 9; d++) {
    if (numCount[d] > 0) {
      result += String(d).repeat(numCount[d]);
    }
  }
  return result;
};
