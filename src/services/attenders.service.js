const { pool } = require("../infrastructure/db_conexion");
const { attender } = require("../infrastructure/queries");

module.exports = {
  getAll: async () => {
    const { rows } = await pool.query(attender.getAll);
    return rows;
  },

  getAllByEventId: async (eventId) => {
    const { rows } = await pool.query(attender.getAllByEventId, [eventId]);
    return rows;
  },

  getById: async (id) => {
    const { rows } = await pool.query(attender.getById, [id]);
    return rows[0];
  },

  create: async (attenderData) => {
    const { event_id, user_id, ticket_id, status = "pending" } = attenderData;
    const { rows } = await pool.query(attender.create, [
      event_id,
      user_id,
      ticket_id,
      status,
    ]);
    return rows[0];
  },

  update: async (id, attenderData) => {
    const { event_id, user_id, ticket_id, status } = attenderData;
    const { rows } = await pool.query(attender.update, [
      event_id,
      user_id,
      ticket_id,
      status,
      id,
    ]);
    return rows[0];
  },

  deleteById: async (id) => {
    const { rows } = await pool.query(attender.deleteById, [id]);
    return rows[0];
  },
};
