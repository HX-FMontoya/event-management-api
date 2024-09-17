const { pool } = require("../../db/db_conexion");
const { ticket } = require("../../db/queries");
const { parseEnabledDays } = require("../helpers");

module.exports = {
  getAll: async () => {
    const { rows } = await pool.query(ticket.getAll);
    return rows.map((ticket) => ({
      ...ticket,
      enabled_days: parseEnabledDays(ticket.enabled_days),
    }));
  },

  getById: async (id) => {
    const { rows } = await pool.query(ticket.getById, [id]);
    return { ...rows[0], enabled_days: parseEnabledDays(rows[0].enabled_days) };
  },

  create: async (ticketData) => {
    const { event_id, user_id, ticket_type, price, enabled_days } = ticketData;
    const values = [event_id, user_id, ticket_type, price, enabled_days, new Date()];
    const { rows } = await pool.query(ticket.create, values);
    return {
      ...rows[0],
      enabled_days: parseEnabledDays(rows[0].enabled_days),
    };
  },

  update: async (id, ticketData) => {
    const { event_id, user_id, ticket_type, price, enabled_days } = ticketData;
    const values = [event_id, user_id, ticket_type, price, enabled_days, id];
    const { rows } = await pool.query(ticket.update, values);
    return { ...rows[0], enabled_days: parseEnabledDays(rows[0].enabled_days) };
  },

  deleteById: async (id) => {
    const { rows } = await pool.query(ticket.deleteById, [id]);
    return { ...rows[0], enabled_days: parseEnabledDays(rows[0].enabled_days) };
  },
};
