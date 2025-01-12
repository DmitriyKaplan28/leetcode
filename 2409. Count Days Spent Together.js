/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (
  arriveAlice,
  leaveAlice,
  arriveBob,
  leaveBob
) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function dateToDayOfYear(date) {
    const [month, day] = date.split("-").map(Number);
    const daysBefore = daysInMonth
      .slice(0, month - 1)
      .reduce((sum, days) => sum + days, 0);
    return daysBefore + day;
  }

  const startAlice = dateToDayOfYear(arriveAlice);
  const endAlice = dateToDayOfYear(leaveAlice);
  const startBob = dateToDayOfYear(arriveBob);
  const endBob = dateToDayOfYear(leaveBob);

  const overlapStart = Math.max(startAlice, startBob);
  const overlapEnd = Math.min(endAlice, endBob);

  return Math.max(0, overlapEnd - overlapStart + 1);
};

console.log(countDaysTogether("03-01", "03-10", "03-05", "03-15"));
