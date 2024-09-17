const Joi = require("joi");

module.exports = Joi.object({
  event_id: Joi.number().integer().required(),
  user_id: Joi.number().integer().required(),
  ticket_id: Joi.number().integer().required(),
  status: Joi.string()
    .valid("confirmed", "pending", "cancelled")
    .default("confirmed"),
});
