const router = require("express").Router();
const {
  getAll,
  create,
  getById,
  update,
  deleteById,
} = require("../controllers/attenders.controller");
const {
  verifyAdmin,
  verifyWhoModifiesAssistant,
  verifyAdminOrOrganizer,
  verifyResource,
  auth,
  validations,
} = require("../middlewares");
const { eventsService, ticketsService, usersService } = require("../services");
const { validateAttender } = validations;

router.get(
  "/",
  auth,
  verifyAdminOrOrganizer,
  verifyWhoModifiesAssistant,
  getAll
);
router.post(
  "/",
  auth,
  verifyResource(eventsService, "event"),
  verifyResource(ticketsService, "ticket"),
  verifyResource(usersService, "user"),
  validateAttender,
  create
);
router.get("/:id", auth, verifyWhoModifiesAssistant, getById);
router.put(
  "/:id",
  auth,
  verifyResource(eventsService, "event"),
  verifyResource(ticketsService, "ticket"),
  verifyResource(usersService, "user"),
  verifyWhoModifiesAssistant,
  validateAttender,
  update
);
router.delete("/:id", auth, verifyAdmin, deleteById);

module.exports = router;
