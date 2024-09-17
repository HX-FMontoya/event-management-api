module.exports = (attenders) => {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const attendeesPerDay = daysOfWeek.reduce((acc, day) => {
    acc[day] = 0;
    return acc;
  }, {});

  console.log(attenders);

  attenders.forEach((attender) => {
    if (attender.ticket) {
      if (attender.ticket.enabled_days)
        attender.ticket.enabled_days.forEach((day) => {
          if (daysOfWeek.includes(day)) {
            attendeesPerDay[day] += 1;
          }
        });
    }
  });

  return attendeesPerDay;
};
