module.exports = (req, res, next) => {
  if (req.user) {
    const { role } = req.user;
    if (role === "organizer" || role === "admin") {
      next();
    } else {
      res
        .status(403)
        .send({ message: "You are not authorized to perform this action" });
    }
  } else {
    res
      .status(403)
      .send({ message: "You are not authorized to perform this action" });
  }
};
