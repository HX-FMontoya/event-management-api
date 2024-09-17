const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const { checkPermission, checkToken, validations } = require("../middlewares");
const { validateUser } = validations;

router.post("/login", authController.login);
router.post(
  "/register",
  checkToken,
  checkPermission,
  validateUser,
  authController.register
);

module.exports = router;
