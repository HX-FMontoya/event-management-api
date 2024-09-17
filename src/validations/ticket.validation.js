const Joi = require("joi");

module.exports = Joi.object({
  event_id: Joi.number().integer().required(),
  user_id: Joi.number().integer().optional(),
  ticket_type: Joi.string().valid("VIP", "General").required(),
  price: Joi.number().positive().required(),
  purchase_date: Joi.date()
    .iso()
    .default(() => new Date().toISOString()),
  status: Joi.string()
    .max(50)
    .valid("created", "reserved", "paid", "cancelled", "refunded")
    .default("created"),
  enabled_days: Joi.array()
    .items(
      Joi.string().valid(
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
      )
    )
    .required(),
});
