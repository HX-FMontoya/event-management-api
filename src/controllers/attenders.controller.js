const { attendersService } = require("../services");
const { catcherController } = require("../utils/catchers");
const { calculateAttendersPerDay } = require("../helpers");

module.exports = {
  getAll: catcherController(async (req, res) => {
    const { eventId } = req.query;
    if (eventId) {
      const attenders = await attendersService.getAllByEventId(eventId);
      return res.status(200).json(attenders);
    }
    const attenders = await attendersService.getAll();
    res.status(200).json(attenders);
  }),

  getById: catcherController(async (req, res) => {
    const { id } = req.params;
    const attender = await attendersService.getById(id);
    if (!attender) {
      return res.status(404).json({ message: "Attender not found" });
    }
    res.status(200).json(attender);
  }),

  getAttendersPerDay: catcherController(async (req, res) => {
    const { eventId } = req.query;
    let attenders;
    if (eventId) {
      attenders = await attendersService.getAllByEventId(eventId);
    } else {
      attenders = await attendersService.getAll();
    }
    const attendeesPerDay = calculateAttendersPerDay(attenders);
    res.status(200).json(attendeesPerDay);
  }),

  create: catcherController(async (req, res) => {
    const attenderData = req.body;
    const newAttender = await attendersService.create(attenderData);
    res.status(201).json(newAttender);
  }),

  update: catcherController(async (req, res) => {
    const { id } = req.params;
    const attenderData = req.body;
    const updatedAttender = await attendersService.update(id, attenderData);
    if (!updatedAttender) {
      return res.status(404).json({ message: "Attender not found" });
    }
    res.status(200).json(updatedAttender);
  }),

  deleteById: catcherController(async (req, res) => {
    const { id } = req.params;
    const deletedAttender = await attendersService.deleteById(id);
    if (!deletedAttender) {
      return res.status(404).json({ message: "Attender not found" });
    }
    res
      .status(200)
      .json({ message: "Attender deleted", data: deletedAttender });
  }),
};
