const router = require("express").Router();
const {
  getAll,
  create,
  getById,
  update,
  deleteById,
} = require("../controllers/events.controller");
const { validateEvent } = require("../middlewares/validations.moddleware")

router.get("/", getAll);
router.post("/", validateEvent, create);
router.get("/:id", getById);
router.put("/:id", validateEvent, update);
router.delete("/:id", deleteById);

module.exports = router;
