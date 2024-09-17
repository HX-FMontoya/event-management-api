const router = require("express").Router();
const {
  getAll,
  create,
  getById,
  update,
  deleteById,
} = require("../controllers/tickets.controller");
const {
  verifyAdmin,
  verifyAdminOrOrganizer,
  verifyResource,
  auth,
  validations,
} = require("../middlewares");
const { eventsService } = require("../services");
const { validateTicket } = validations;

router.get("/", auth, verifyAdmin, getAll);
router.post(
  "/",
  auth,
  verifyResource(eventsService, "event"),
  verifyAdminOrOrganizer,
  validateTicket,
  create
);
router.get("/:id", auth, getById);
router.put(
  "/:id",
  auth,
  verifyResource(eventsService, "event"),
  verifyAdminOrOrganizer,
  validateTicket,
  update
);
router.delete("/:id", auth, verifyAdminOrOrganizer, deleteById);

module.exports = router;
