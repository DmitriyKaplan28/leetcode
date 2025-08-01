/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let totalMoves = 0;

  for (let i = 0; i < students.length; i++) {
    totalMoves += Math.abs(students[i] - seats[i]);
  }

  return totalMoves;
};
