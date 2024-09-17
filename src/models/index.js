const Joi = require("joi");

module.exports = {
  eventSchema: Joi.object({
    title: Joi.string().min(3).max(255).required(),
    description: Joi.string().max(1000),
    start_date: Joi.date().iso().required(),
    end_date: Joi.date().iso().greater(Joi.ref("start_date")),
    status: Joi.string()
      .valid("scheduled", "cancelled", "completed")
      .required(),
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
  }),
  userSchema: Joi.object({
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
  }),
  ticketSchema: Joi.object({
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
  }),
  attenderSchema: Joi.object({
    event_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().required(),
    ticket_id: Joi.number().integer().required(),
    status: Joi.string()
      .valid("confirmed", "pending", "cancelled")
      .default("confirmed"),
  }),
  reservationSchema: Joi.object({
    event_id: Joi.number().integer().required(),
    ticket_type: Joi.string().valid("VIP", "General").required(),
    price: Joi.number().positive().required(),
    enabled_days: Joi.array().items(Joi.string()).required(),
  }),
};
