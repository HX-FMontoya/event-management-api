const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const { checkPermission, checkToken } = require("../middlewares");
const { validateUser } = require("../middlewares/validations.middleware");

router.post("/login", authController.login);
router.post(
  "/register",
  checkToken,
  checkPermission,
  validateUser,
  authController.register
);

module.exports = router;
