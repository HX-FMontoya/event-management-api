const { pool } = require("../../db/db_conexion");
const { ticket } = require("../../db/queries");
const { genericCatcher } = require("../utils/catchers");

module.exports = {
  getAll: genericCatcher(async () => {
    const { rows } = await pool.query(ticket.getAll);
    return rows;
  }),

  gettById: genericCatcher(async (id) => {
    const { rows } = await pool.query(ticket.getById, [id]);
    return rows[0];
  }),

  create: genericCatcher(async (ticketData) => {
    const { event_id, user_id, ticket_type, price } = ticketData;
    const values = [event_id, user_id, ticket_type, price];
    const { rows } = await pool.query(ticket.create, values);
    return rows[0];
  }),

  update: genericCatcher(async (id, ticketData) => {
    const { event_id, user_id, ticket_type, price } = ticketData;
    const values = [event_id, user_id, ticket_type, price, id];
    const { rows } = await pool.query(ticket.update, values);
    return rows[0];
  }),

  deleteById: genericCatcher(async (id) => {
    const { rows } = await pool.query(ticket.deleteById, [id]);
    return rows[0];
  }),
};
