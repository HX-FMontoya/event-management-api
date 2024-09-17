const router = require("express").Router();
const {
  getAll,
  create,
  upload,
  getById,
  update,
  deleteById,
} = require("../controllers/events.controller");
const {
  verifyAdminOrOrganizer,
  auth,
  verifyWhoModifiesEvent,
  validations,
  upload: uploadMiddleWare,
} = require("../middlewares");
const { validateEvent } = validations;

router.get("/", getAll);
router.post("/", auth, verifyAdminOrOrganizer, validateEvent, create);
router.post("/upload", auth, verifyAdminOrOrganizer, uploadMiddleWare, upload);
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
