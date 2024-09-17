module.exports = (req, res, next) => {
  if (req.user && req.user.role === "organizer") {
    next();
  } else {
    res
      .status(403)
      .send({ message: "You are not authorized to perform this action" });
  }
};
