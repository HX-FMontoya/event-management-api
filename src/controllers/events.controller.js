const { eventsService } = require("../services");
const { catcherController } = require("../utils/catchers");

module.exports = {
  getAllEvents: catcherController(async (req, res) => {
    const events = await eventsService.getAllEvents();
    res.status(200).json(events);
  }),
  getEventById: catcherController(async (req, res) => {
    const { id } = req.params;
    const event = await eventsService.getEventById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  }),
  createEvent: catcherController(async (req, res) => {
    const eventData = req.body;
    const newEvent = await eventsService.createEvent(eventData);
    res.status(201).json(newEvent);
  }),
  updateEvent: catcherController(async (req, res) => {
    const { id } = req.params;
    const eventData = req.body;
    const updatedEvent = await eventsService.updateEvent(id, eventData);
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(updatedEvent);
  }),
  deleteEvent: catcherController(async (req, res) => {
    const { id } = req.params;
    const deletedEvent = await eventsService.deleteEvent(id);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted", data: deletedEvent });
  }),
};
