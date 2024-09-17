const { pool } = require("../infrastructure/db_conexion");
const { ticket } = require("../infrastructure/queries");
const { parseEnabledDays } = require("../helpers");

module.exports = {
  getAll: async () => {
    const { rows } = await pool.query(ticket.getAll);
    if (rows.length === 0) {
      return null;
    }
    return rows.map((ticket) => ({
      ...ticket,
      enabled_days: parseEnabledDays(ticket.enabled_days),
    }));
  },

  getById: async (id) => {
    const { rows } = await pool.query(ticket.getById, [id]);
    if (rows.length === 0) {
      return null;
    }
    return { ...rows[0], enabled_days: parseEnabledDays(rows[0].enabled_days) };
  },

  create: async (ticketData) => {
    const { event_id, user_id, ticket_type, price, enabled_days } = ticketData;
    const values = [
      event_id,
      user_id,
      ticket_type,
      price,
      enabled_days,
      new Date(),
    ];
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
    if (rows.length === 0) {
      return null;
    }
    return { ...rows[0], enabled_days: parseEnabledDays(rows[0].enabled_days) };
  },

  deleteById: async (id) => {
    const { rows } = await pool.query(ticket.deleteById, [id]);
    if (rows.length === 0) {
      return null;
    }
    return { ...rows[0], enabled_days: parseEnabledDays(rows[0].enabled_days) };
  },
};
