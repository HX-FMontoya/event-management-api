const router = require("express").Router();
const {
  getAll,
  create,
  getById,
  update,
  deleteById,
} = require("../controllers/attenders.controller");
const { validateAttender } = require("../middlewares/validations.middleware");
const auth = require("../middlewares/auth.middleware");
const { verifyAdmin, verifyWhoModifiesAssistant, verifyAdminOrOrganizer } = require("../middlewares");

router.get("/", auth, verifyAdminOrOrganizer, verifyWhoModifiesAssistant, getAll);
router.post("/", auth, validateAttender, create);
router.get("/:id", auth, verifyWhoModifiesAssistant, getById);
router.put("/:id", auth, verifyWhoModifiesAssistant, validateAttender, update);
router.delete("/:id", auth, verifyAdmin, deleteById);

module.exports = router;
