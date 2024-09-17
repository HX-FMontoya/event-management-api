const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  profile_image_url: Joi.string().uri().optional().allow(null, ""),
  role: Joi.string().valid("admin", "user", "organizer").default("user"),
  status: Joi.string()
    .valid("active", "inactive", "suspended")
    .default("active"),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$"
      )
    )
    .required(),
});
