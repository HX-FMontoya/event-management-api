const router = require("express").Router();
const {
    getAll,
    create,
    getById,
    update,
    deleteById,
} = require("../controllers/attenders.controller");
const { validateAttender } = require("../middlewares/validations.moddleware");

router.get("/", getAll);
router.post("/", validateAttender, create);
router.get("/:id", getById);
router.put("/:id", validateAttender, update);
router.delete("/:id", deleteById);

module.exports = router;
