const router = require("express").Router();
const {
  getAll,
  create,
  getById,
  update,
  deleteById,
} = require("../controllers/users.controller");
const { validateUser } = require("../middlewares/validations.moddleware");

router.get("/", getAll);
router.post("/", validateUser, create);
router.get("/:id", getById);
router.put("/:id", validateUser, update);
router.delete("/:id", deleteById);

module.exports = router;
