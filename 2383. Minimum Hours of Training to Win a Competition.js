/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    const totalEnergyNeeded = energy.reduce((s, e) => s + e, 0) + 1;
  let hours = 0;
  if (initialEnergy < totalEnergyNeeded) {
    hours += (totalEnergyNeeded - initialEnergy);
    initialEnergy = totalEnergyNeeded;
  }
  let curExp = initialExperience;
  for (let i = 0; i < experience.length; i++) {
    if (curExp <= experience[i]) {
      const need = experience[i] - curExp + 1;
      hours += need;
      curExp += need;
    }
    curExp += experience[i];
  }
  return hours;
};
