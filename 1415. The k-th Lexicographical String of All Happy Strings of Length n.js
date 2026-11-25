/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  const letters = ["a", "b", "c"];
  let answer = "";

  for (let position = 0; position < n; position++) {
    const blockSize = 2 ** (n - position - 1);

    for (const letter of letters) {
      if (answer && letter === answer[answer.length - 1]) {
        continue;
      }

      if (k > blockSize) {
        k -= blockSize;
      } else {
        answer += letter;
        break;
      }
    }

    if (answer.length !== position + 1) {
      return "";
    }
  }

  return answer;
};
