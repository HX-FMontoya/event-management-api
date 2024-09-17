module.exports = function getDaysBetweenDates(start_date, end_date) {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const start = new Date(start_date);
  const end = new Date(end_date);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new Error("Invalid date(s) provided");
  }

  if (start > end) {
    throw new Error("start_date must be before or equal to end_date");
  }

  const daysArray = [];
  const currentDate = new Date(start);

  while (currentDate <= end) {
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    daysArray.push(dayOfWeek);
    currentDate.setUTCDate(currentDate.getUTCDate() + 1);
  }

  return daysArray;
};
