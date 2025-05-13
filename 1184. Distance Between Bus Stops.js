/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  if (start > destination) [start, destination] = [destination, start]; // ensure start < destination

  const totalDistance = distance.reduce((sum, d) => sum + d, 0);

  const clockwise = distance.slice(start, destination).reduce((sum, d) => sum + d, 0);

  const counterClockwise = totalDistance - clockwise;

  return Math.min(clockwise, counterClockwise);
};
