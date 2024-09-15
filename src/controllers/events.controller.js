const { eventsService } = require("../services");
const { catcherController } = require("../utils/catchers");

module.exports = {
  getAll: catcherController(async (req, res) => {
    const events = await eventsService.getAll();
    res.status(200).json(events);
  }),
  getById: catcherController(async (req, res) => {
    const { id } = req.params;
    const event = await eventsService.getById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  }),
  create: catcherController(async (req, res) => {
    const eventData = req.body;
    const newEvent = await eventsService.create(eventData);
    res.status(201).json(newEvent);
  }),
  update: catcherController(async (req, res) => {
    const { id } = req.params;
    const eventData = req.body;
    const updatedEvent = await eventsService.update(id, eventData);
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(updatedEvent);
  }),
  deleteById: catcherController(async (req, res) => {
    const { id } = req.params;
    const deletedEvent = await eventsService.deleteById(id);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted", data: deletedEvent });
  }),
};
