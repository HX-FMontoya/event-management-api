const {
  event,
  user,
  ticket,
  attender,
  reservation,
} = require("../../validations");

const validate = (Schema) => (req, res, next) => {
  const { error } = Schema.validate(req.body, { abortEarly: false });

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
  validateEvent: validate(event),
  validateUser: validate(user),
  validateTicket: validate(ticket),
  validateAttender: validate(attender),
  validateReservation: validate(reservation),
};
