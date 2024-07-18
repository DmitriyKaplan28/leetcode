/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let n1 = students.length - 1;
  let n2 = 0;

  while (students.length > 0 && n1 >= n2) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      n1 = students.length - 1;

      sandwiches.shift();
      n2 = 0;
    } else {
      const toTheEnd = students.shift();

      students.push(toTheEnd);
      n1 -= 1;
    }
  }

  return students.length;
};
