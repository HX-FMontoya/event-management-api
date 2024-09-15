const { eventsService } = require("../services");

module.exports = {
  getAllEvents: async (req, res, next) => {
    try {
      const events = await eventsService.getAllEvents();
      res.status(200).json(events);
    } catch (error) {
      next(error);
    }
  },
  getEventById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const event = await eventsService.getEventById(id);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  },
  createEvent: async (req, res, next) => {
    try {
      const eventData = req.body;
      const newEvent = await eventsService.createEvent(eventData);
      res.status(201).json(newEvent);
    } catch (error) {
      next(error);
    }
  },
  updateEvent: async (req, res, next) => {
    try {
      const { id } = req.params;
      const eventData = req.body;
      const updatedEvent = await eventsService.updateEvent(id, eventData);
      if (!updatedEvent) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.status(200).json(updatedEvent);
    } catch (error) {
      next(error);
    }
  },
  deleteEvent: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedEvent = await eventsService.deleteEvent(id);
      if (!deletedEvent) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.status(200).json({ message: "Event deleted", data: deletedEvent });
    } catch (error) {
      next(error);
    }
  },
};
