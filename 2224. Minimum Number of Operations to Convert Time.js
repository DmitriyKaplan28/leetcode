/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
  let currHours = +current.slice(0, 2),
    currMins = +current.slice(3);
  let correctHours = +correct.slice(0, 2),
    correctMins = +correct.slice(3);
  let currTime = currHours * 60 + currMins,
    correctTime = correctHours * 60 + correctMins;

  let diff = correctTime - currTime;
  let options = [60, 15, 5, 1],
    res = 0;
  for (let i = 0; i < options.length; i++) {
    res += Math.floor(diff / options[i]);
    diff = diff % options[i];
  }
  return res;
};
