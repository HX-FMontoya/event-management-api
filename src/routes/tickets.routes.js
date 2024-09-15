const router = require("express").Router();
const {
  getAll,
  create,
  getById,
  update,
  deleteById,
} = require("../controllers/tickets.controller");
const { validateTicket } = require("../middlewares/validations.moddleware");

router.get("/", getAll);
router.post("/", validateTicket, create);
router.get("/:id", getById);
router.put("/:id", validateTicket, update);
router.delete("/:id", deleteById);

module.exports = router;
