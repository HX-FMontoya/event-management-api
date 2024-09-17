module.exports = (req, res, next) => {
  if (req.user) {
    if (req.user.role === "admin") {
      next();
    } else if (req.user.id == req.params.id) {
      next();
    } else {
      res
        .status(403)
        .send({ message: "You are not allowed to perform this action" });
    }
  } else {
    res
      .status(403)
      .send({ message: "You are not allowed to perform this action" });
  }
};
