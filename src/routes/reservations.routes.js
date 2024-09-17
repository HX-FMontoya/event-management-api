const router = require("express").Router();
const { create } = require("../controllers/reservations.controllers");
const {
  validations,
  auth,
  validateDaysForReservation,
  verifyResource,
} = require("../middlewares");
const { eventsService } = require("../services");
const { validateReservation } = validations;

router.post(
  "/",
  auth,
  verifyResource(eventsService, "event"),
  validateDaysForReservation,
  validateReservation,
  create
);

module.exports = router;
