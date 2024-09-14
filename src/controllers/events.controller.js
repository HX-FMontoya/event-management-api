module.exports = {
  getAllEvents: (req, res) => {
    res.json({ message: "Get all events" });
  },
  getEventById: (req, res) => {
    res.json({ message: `Get event ${req.params.id}` });
  },
  createEvent: (req, res) => {
    res.json({ message: "Event created" });
  },
  updateEvent: (req, res) => {
    res.json({ message: `Event ${req.params.id} Updated` });
  },
  deleteEvent: (req, res) => {
    res.json({ message: `Event ${req.params.id} deleted` });
  },
};
