const Joi = require("joi");

module.exports = Joi.object({
  event_id: Joi.number().integer().required(),
  ticket_type: Joi.string().valid("VIP", "General").required(),
  price: Joi.number().positive().required(),
  enabled_days: Joi.array().items(Joi.string()).required(),
});
