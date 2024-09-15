const ticketsService = require("../services/tickets.service");
const { catcherController } = require("../utils/catchers");

module.exports = {
  getAll: catcherController(async (req, res) => {
    const tickets = await ticketsService.getAll();
    res.status(200).json(tickets);
  }),

  getById: catcherController(async (req, res) => {
    const { id } = req.params;
    const ticket = await ticketsService.getById(id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json(ticket);
  }),

  create: catcherController(async (req, res) => {
    const ticketData = req.body;
    const newTicket = await ticketsService.create(ticketData);
    res.status(201).json(newTicket);
  }),

  update: catcherController(async (req, res) => {
    const { id } = req.params;
    const ticketData = req.body;
    const updatedTicket = await ticketsService.update(id, ticketData);
    if (!updatedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json(updatedTicket);
  }),

  deleteById: catcherController(async (req, res) => {
    const { id } = req.params;
    const deletedTicket = await ticketsService.deleteById(id);
    if (!deletedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json({ message: "Ticket deleted", data: deletedTicket });
  }),
};
