const verifyAdmin = require("./verifyAdmin.middleware");

module.exports = (req, res, next) => {
  const { role } = req.body;
  if (role === "admin" || role === "organizer") {
    verifyAdmin(req, res, next);
  } else {
    next();
  }
};
