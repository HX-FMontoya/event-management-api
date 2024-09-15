const Joi = require("joi");

const eventSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  description: Joi.string().max(1000),
  start_date: Joi.date().iso().required(),
  end_date: Joi.date().iso().greater(Joi.ref("start_date")),
  status: Joi.string().valid("scheduled", "cancelled", "completed").required(),
  image_url: Joi.string().max(255).optional(),
  location: Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    image_url: Joi.string().max(255).optional(),
  }).required(),
  created_by: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    profile_image_url: Joi.string().uri(),
    role: Joi.string().valid("organizer").default("organizer"),
    status: Joi.string()
      .valid("active", "inactive", "suspended")
      .default("active"),
  }).required(),
});

const userSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  profile_image_url: Joi.string().uri().optional(),
  role: Joi.string().valid("admin", "user", "organizer").required(),
  status: Joi.string()
    .valid("active", "inactive", "suspended")
    .default("active"),
});

module.exports = {
  validateEvent: (req, res, next) => {
    const { error } = eventSchema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        details: error.details.map((detail) => detail.message),
      });
    }

    next();
  },
  validateUser: (req, res, next) => {
    const { error } = userSchema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        details: error.details.map((detail) => detail.message),
      });
    }

    next();
  },
};
