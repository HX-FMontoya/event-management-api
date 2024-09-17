const {
  eventSchema,
  userSchema,
  ticketSchema,
  attenderSchema,
  reservationSchema
} = require("../models");

const validateSchema = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      details: error.details.map((detail) => detail.message),
    });
  }

  next();
};

module.exports = {
  validateEvent: validateSchema(eventSchema),
  validateUser: validateSchema(userSchema),
  validateTicket: validateSchema(ticketSchema),
  validateAttender: validateSchema(attenderSchema),
  validateReservation: validateSchema(reservationSchema),
};
