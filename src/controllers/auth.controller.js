const { usersService, authService } = require("../services");
const { catcherController } = require("../utils/catchers");

module.exports = {
  login: catcherController(async (req, res) => {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  }),

  register: catcherController(async (req, res) => {
    const { name, email, password, role, profile_image_url } = req.body;

    const { user, token } = await usersService.create({
      name,
      email,
      password,
      role: role || "user",
      profile_image_url,
    });

    res.status(201).json({
      success: true,
      user,
      token,
      message: "User registered successfully!",
    });
  }),
};
