const { usersService } = require("../services");
const { catcherController } = require("../utils/catchers");

module.exports = {
  getAllUsers: catcherController(async (req, res) => {
    const users = await usersService.getAllUsers();
    res.status(200).json(users);
  }),
  getUserById: catcherController(async (req, res) => {
    const { id } = req.params;
    const user = await usersService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  }),
  createUser: catcherController(async (req, res) => {
    const userData = req.body;
    const newUser = await usersService.createUser(userData);
    res.status(201).json(newUser);
  }),
  updateUser: catcherController(async (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    const updatedUser = await usersService.updateUser(id, userData);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  }),
  deleteUser: catcherController(async (req, res) => {
    const { id } = req.params;
    const deletedUser = await usersService.deleteUser(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted", data: deletedUser });
  }),
};
