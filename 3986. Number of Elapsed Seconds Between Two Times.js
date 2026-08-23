/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function (startTime, endTime) {
  const toSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);

    return hours * 3600 + minutes * 60 + seconds;
  };

  return toSeconds(endTime) - toSeconds(startTime);
};
