/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  let [hours, minutes] = time.split(":");

  if (hours[0] === "?") {
    hours =
      hours[1] === "?" || hours[1] <= "3" ? "2" + hours[1] : "1" + hours[1];
  }
  if (hours[1] === "?") {
    hours = hours[0] === "2" ? "23" : hours[0] + "9";
  }

  if (minutes[0] === "?") {
    minutes = "5" + minutes[1];
  }
  if (minutes[1] === "?") {
    minutes = minutes[0] + "9";
  }

  return `${hours}:${minutes}`;
};

console.log(maximumTime("2?:?0")); // Output: "23:50"
console.log(maximumTime("0?:3?")); // Output: "09:39"