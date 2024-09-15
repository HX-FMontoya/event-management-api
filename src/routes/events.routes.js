const router = require("express").Router();
const {
  getAllEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/events.controller");
const { validateEvent } = require("../middlewares/validations.moddleware")

router.get("/", getAllEvents);
router.post("/", validateEvent, createEvent);
router.get("/:id", getEventById);
router.put("/:id", validateEvent, updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
