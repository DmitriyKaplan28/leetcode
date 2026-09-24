/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function (arr) {
  let latestMinutes = -1;

  const buildTimes = function (used, digits) {
    if (digits.length === 4) {
      const hours = digits[0] * 10 + digits[1];
      const minutes = digits[2] * 10 + digits[3];

      if (hours < 24 && minutes < 60) {
        latestMinutes = Math.max(latestMinutes, hours * 60 + minutes);
      }

      return;
    }

    for (let index = 0; index < arr.length; index++) {
      if (!used[index]) {
        used[index] = true;
        digits.push(arr[index]);
        buildTimes(used, digits);
        digits.pop();
        used[index] = false;
      }
    }
  };

  buildTimes([], []);

  if (latestMinutes === -1) {
    return "";
  }

  const hours = Math.floor(latestMinutes / 60);
  const minutes = latestMinutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};
