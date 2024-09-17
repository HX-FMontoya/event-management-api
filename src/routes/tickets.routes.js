const router = require("express").Router();
const {
  getAll,
  create,
  getById,
  update,
  deleteById,
} = require("../controllers/tickets.controller");
const { validateTicket } = require("../middlewares/validations.middleware");
const auth = require("../middlewares/auth.middleware");
const { verifyAdmin, verifyAdminOrOrganizer } = require("../middlewares");

router.get("/", auth, verifyAdmin, getAll);
router.post("/", auth, verifyAdminOrOrganizer, validateTicket, create);
router.get("/:id", auth, getById);
router.put("/:id", auth, verifyAdminOrOrganizer, validateTicket, update);
router.delete("/:id", auth, verifyAdminOrOrganizer, deleteById);

module.exports = router;
