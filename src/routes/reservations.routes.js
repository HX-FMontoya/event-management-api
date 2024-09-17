const router = require("express").Router();
const { create } = require("../controllers/reservations.controllers");
const {
  validateReservation,
} = require("../middlewares/validations.middleware");
const { auth } = require("../middlewares");
const { validateDaysForReservation } = require("../middlewares");

router.post("/", auth, validateDaysForReservation, validateReservation, create);

module.exports = router;
