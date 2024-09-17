const router = require("express").Router();
const {
  getAll,
  getById,
  update,
  deleteById,
} = require("../controllers/users.controller");
const { verifyAdmin, verifyWhoModifiesUser, auth } = require("../middlewares");

router.get("/", auth, verifyAdmin, getAll);
router.get("/:id", auth, verifyWhoModifiesUser, getById);
router.put("/:id", auth, verifyWhoModifiesUser, update);
router.delete("/:id", auth, verifyWhoModifiesUser, deleteById);

module.exports = router;
