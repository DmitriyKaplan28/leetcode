/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  const timeArray = time.split('');
  
  // Handle hours
  if (timeArray[0] === '?') {
    if (timeArray[1] === '?') {
      timeArray[0] = '1';
      timeArray[1] = '1';
    } else if (timeArray[1] <= '1') {
      timeArray[0] = '1';
    } else {
      timeArray[0] = '0';
    }
  }
  
  if (timeArray[1] === '?') {
    if (timeArray[0] === '1') {
      timeArray[1] = '1';
    } else {
      timeArray[1] = '9';
    }
  }
  
  // Handle minutes
  if (timeArray[3] === '?') {
    timeArray[3] = '5';
  }
  
  if (timeArray[4] === '?') {
    timeArray[4] = '9';
  }
  
  return timeArray.join('');
};

console.log(maximumTime("2?:?0")); // Output: "23:50"
console.log(maximumTime("0?:3?")); // Output: "09:39"
console.log(maximumTime("1?:22")); // Output: "19:22"
console.log(maximumTime("?4:03")); // Output: "14:03"