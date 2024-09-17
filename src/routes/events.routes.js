const router = require("express").Router();
const {
  getAll,
  create,
  getById,
  update,
  deleteById,
} = require("../controllers/events.controller");
const { validateEvent } = require("../middlewares/validations.middleware");
const {
  verifyAdminOrOrganizer,
  auth,
  verifyWhoModifiesEvent,
} = require("../middlewares");

router.get("/", getAll);
router.post("/", auth, verifyAdminOrOrganizer, validateEvent, create);
router.get("/:id", getById);
router.put(
  "/:id",
  auth,
  verifyAdminOrOrganizer,
  verifyWhoModifiesEvent,
  validateEvent,
  update
);
router.delete(
  "/:id",
  auth,
  verifyAdminOrOrganizer,
  verifyWhoModifiesEvent,
  deleteById
);

module.exports = router;
