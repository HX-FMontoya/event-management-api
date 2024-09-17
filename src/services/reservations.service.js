const attendersService = require("./attenders.service");
const ticketsService = require("./tickets.service");

module.exports = {
  create: async (reservationData) => {
    const { event_id, user_id, ticket_type, price, enabled_days } =
      reservationData;
    const createTicket = await ticketsService.create({
      event_id,
      user_id,
      ticket_type,
      price,
      enabled_days,
    });
    const createAttender = await attendersService.create({
      user_id,
      event_id,
      ticket_id: createTicket.id,
    });
    return createAttender;
  },
};
