const { calculateDays } = require("../../../helpers");
const { eventsService } = require("../../../services");

module.exports = async (req, res, next) => {
  const { enabled_days, event_id } = req.body;

  const event = await eventsService.getById(event_id);
  const days = calculateDays(event.start_date, event.end_date);
  const invalidDays = enabled_days.filter((day) => !days.includes(day));

  if (invalidDays.length) {
    return res.status(400).json({
      message: "Invalid days for reservation",
      invalidDays,
      validDays: days,
    });
  } else {
    next();
  }
};
