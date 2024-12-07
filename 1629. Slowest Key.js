/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let maxDuration = releaseTimes[0];
  let longestKey = keysPressed[0];

  for (let i = 1; i < keysPressed.length; i++) {
    const duration = releaseTimes[i] - releaseTimes[i - 1];

    if (
      duration > maxDuration ||
      (duration === maxDuration && keysPressed[i] > longestKey)
    ) {
      maxDuration = duration;
      longestKey = keysPressed[i];
    }
  }

  return longestKey;
};
