const { usersService } = require("../services");
const { catcherController } = require("../utils/catchers");

module.exports = {
  getAll: catcherController(async (req, res) => {
    const users = await usersService.getAll();
    res.status(200).json(users);
  }),
  getById: catcherController(async (req, res) => {
    const { id } = req.params;
    const user = await usersService.getById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  }),
  create: catcherController(async (req, res) => {
    const userData = req.body;
    const newUser = await usersService.create(userData);
    res.status(201).json(newUser);
  }),
  update: catcherController(async (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    const updatedUser = await usersService.update(id, userData);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  }),
  deleteById: catcherController(async (req, res) => {
    const { id } = req.params;
    const deletedUser = await usersService.deleteById(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted", data: deletedUser });
  }),
};
