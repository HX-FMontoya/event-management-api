const { eventsService } = require("../../../../services");

module.exports = async (req, res, next) => {
  const event = await eventsService.getById(req.params.id);

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  if (req.user.role === "admin") {
    next();
  } else {
    if (event.created_by.id !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You are not authorized to perform this action" });
    }
    next();
  }
};
