/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const [day, month, year] = date.split(" ");

  return `${year}-${months[month]}-${formatDay(day)}`;
};

const formatDay = (day) => {
    if (day.length === 3) {
      return "0" + day[0];
    } else {
      return day[0] + day[1];
    }
  };

const months = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};
