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
  }),
  userSchema: Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    profile_image_url: Joi.string().uri().optional(),
    role: Joi.string().valid("admin", "user", "organizer").required(),
    status: Joi.string()
      .valid("active", "inactive", "suspended")
      .default("active"),
  }),
  ticketSchema: Joi.object({
    event_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().optional(),
    ticket_type: Joi.string().valid("VIP", "General").required(),
    price: Joi.number().positive().required(),
    purchase_date: Joi.date().iso(),
    status: Joi.string()
      .max(50)
      .valid("created", "reserved", "paid", "cancelled", "refunded")
      .default("created"),
  }),
  attenderSchema: Joi.object({
    event_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().required(),
    ticket_id: Joi.number().integer().required(),
    status: Joi.string()
      .valid("confirmed", "pending", "cancelled")
      .default("confirmed"),
  }),
};
