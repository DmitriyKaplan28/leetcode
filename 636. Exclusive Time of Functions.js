/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const result = Array(n).fill(0);
  const stack = [];
  let previousTime = 0;

  for (const log of logs) {
    const [idText, type, timeText] = log.split(":");
    const id = Number(idText);
    const timestamp = Number(timeText);

    if (type === "start") {
      if (stack.length > 0) {
        result[stack[stack.length - 1]] += timestamp - previousTime;
      }
      stack.push(id);
      previousTime = timestamp;
    } else {
      result[stack.pop()] += timestamp - previousTime + 1;
      previousTime = timestamp + 1;
    }
  }

  return result;
};
