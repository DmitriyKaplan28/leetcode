/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  let count = 0;

  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
      let hour = h.toString().padStart(2, "0");
      let minute = m.toString().padStart(2, "0");

      let currentTime = hour + ":" + minute;

      let isValid = true;
      for (let i = 0; i < 5; i++) {
        if (time[i] !== "?" && time[i] !== currentTime[i]) {
          isValid = false;
          break;
        }
      }

      if (isValid) count++;
    }
  }

  return count;
};

console.log(countTime("?5:00"));
console.log(countTime("0?:0?"));
console.log(countTime("??:??"));
