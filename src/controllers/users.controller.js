module.exports = {
  async getAllUsers(req, res) {
    res.json({ message: "Get all users" });
  },
  async getUserById(req, res) {
    res.json({ message: `Get user ${req.params.id}` });
  },
  async createUser(req, res) {
    res.json({ message: "User Created" });
  },
  async updateUser(req, res) {
    res.json({ message: `User ${req.params.id} updated` });
  },
  async deleteUser(req, res) {
    res.json({ message: `User ${req.params.id} deleted` });
  },
};
