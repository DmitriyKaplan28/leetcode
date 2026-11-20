var UndergroundSystem = function () {
  this.checkIns = new Map();
  this.routeTimes = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkIns.set(id, { stationName, time: t });
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  var checkIn = this.checkIns.get(id);
  this.checkIns.delete(id);

  var routesFromStation = this.routeTimes.get(checkIn.stationName);
  if (!routesFromStation) {
    routesFromStation = new Map();
    this.routeTimes.set(checkIn.stationName, routesFromStation);
  }

  var route = routesFromStation.get(stationName);
  if (!route) {
    route = { totalTime: 0, tripCount: 0 };
    routesFromStation.set(stationName, route);
  }

  route.totalTime += t - checkIn.time;
  route.tripCount++;
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation,
) {
  var route = this.routeTimes.get(startStation).get(endStation);
  return route.totalTime / route.tripCount;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
