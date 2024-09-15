const router = require("express").Router();
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");
const { validateUser } = require("../middlewares/validations.moddleware");

router.get("/", getAllUsers);
router.post("/", validateUser, createUser);
router.get("/:id", getUserById);
router.put("/:id", validateUser, updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
