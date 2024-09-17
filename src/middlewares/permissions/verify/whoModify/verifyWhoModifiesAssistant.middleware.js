const { attendersService } = require("../../../../services");

module.exports = async (req, res, next) => {
  const { eventId } = req.query;
  const { id: attenderId } = req.params;
  const { role, id: userId } = req.user;

  const isAuthorized = (attender) => {
    if (role === "admin") return true;
    if (role === "organizer" && attender.event.created_by === userId)
      return true;
    if (role === "user" && attender.user_id === userId) return true;
    return false;
  };

  if (eventId) {
    const attendersByEvent = await attendersService.getAllByEventId(eventId);
    if (!attendersByEvent) {
      return res.status(404).json({ message: "Attenders not found" });
    }
    if (
      role === "admin" ||
      (role === "organizer" && attendersByEvent.event.created_by === userId)
    ) {
      return next();
    }
    return res
      .status(403)
      .json({ message: "You are not authorized to perform this action" });
  }

  if (attenderId) {
    const attender = await attendersService.getById(attenderId);
    if (!attender) {
      return res.status(404).json({ message: "Attender not found" });
    }
    if (isAuthorized(attender)) {
      return next();
    }
    return res
      .status(403)
      .json({ message: "You are not authorized to perform this action" });
  }

  const attenders = await attendersService.getAll();
  if (!attenders) {
    return res.status(404).json({ message: "Attenders not found" });
  }
  if (role === "admin") {
    return next();
  }
  return res
    .status(403)
    .json({ message: "You are not authorized to perform this action" });
};
