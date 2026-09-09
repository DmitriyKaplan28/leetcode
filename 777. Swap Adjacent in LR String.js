/**
 * @param {string} start
 * @param {string} result
 * @return {boolean}
 */
var canTransform = function (start, result) {
  if (start.length !== result.length) {
    return false;
  }

  let startIndex = 0;
  let resultIndex = 0;

  while (startIndex < start.length || resultIndex < result.length) {
    while (startIndex < start.length && start[startIndex] === "X") {
      startIndex++;
    }
    while (resultIndex < result.length && result[resultIndex] === "X") {
      resultIndex++;
    }

    if (startIndex === start.length || resultIndex === result.length) {
      return startIndex === start.length && resultIndex === result.length;
    }

    if (start[startIndex] !== result[resultIndex]) {
      return false;
    }

    if (start[startIndex] === "L" && startIndex < resultIndex) {
      return false;
    }
    if (start[startIndex] === "R" && startIndex > resultIndex) {
      return false;
    }

    startIndex++;
    resultIndex++;
  }

  return true;
};
