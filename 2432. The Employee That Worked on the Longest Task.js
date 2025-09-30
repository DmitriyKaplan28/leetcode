/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let prev = 0;
  let maxDuration = -1;
  let resultId = 0;

  for (let i = 0; i < logs.length; i++) {
    const id = logs[i][0];
    const leave = logs[i][1];
    const duration = leave - prev;

    if (duration > maxDuration || (duration === maxDuration && id < resultId)) {
      maxDuration = duration;
      resultId = id;
    }

    prev = leave;
  }

  return resultId;
};

console.log(hardestWorker(10, [[0, 3], [2, 5], [0, 9], [1, 15]]));
console.log(hardestWorker(26, [[1, 1], [3, 7], [2, 12], [7, 17]]));
console.log(hardestWorker(2, [[0, 10], [1, 20]]));