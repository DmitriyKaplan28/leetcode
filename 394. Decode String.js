/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  let currentString = "";
  let currentNumber = 0;

  for (let char of s) {
    if (char === "[") {
      stack.push(currentString);
      stack.push(currentNumber);
      currentString = "";
      currentNumber = 0;
    } else if (char === "]") {
      const num = stack.pop();
      const prevString = stack.pop();
      currentString = prevString + currentString.repeat(num);
    } else if (char >= "0" && char <= "9") {
      currentNumber = currentNumber * 10 + parseInt(char);
    } else {
      currentString += char;
    }
  }

  return currentString;
};

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));
