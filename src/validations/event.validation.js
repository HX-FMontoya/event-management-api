const Joi = require("joi");

module.exports = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  description: Joi.string().max(1000),
  start_date: Joi.date().iso().required(),
  end_date: Joi.date().iso().greater(Joi.ref("start_date")),
  status: Joi.string().valid("scheduled", "cancelled", "completed").required(),
  image_url: Joi.string().max(255).optional().allow(null, ""),
  location: Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    image_url: Joi.string().max(255).optional(),
  }).required(),
  created_by: Joi.number().integer().optional(),
});
