/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  const [startTime1, endTime1] = event1;
  const [startTime2, endTime2] = event2;

  const toMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const start1 = toMinutes(startTime1);
  const end1 = toMinutes(endTime1);
  const start2 = toMinutes(startTime2);
  const end2 = toMinutes(endTime2);

  return !(end1 < start2 || end2 < start1);
};
