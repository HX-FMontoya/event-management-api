const { pool } = require("../../db/db_conexion");
const { attender, ticket } = require("../../db/queries");
const { genericCatcher } = require("../utils/catchers");

module.exports = {
  getAll: genericCatcher(async () => {
    const { rows } = await pool.query(attender.getAll);
    return rows;
  }),

  getById: genericCatcher(async (id) => {
    const { rows } = await pool.query(attender.getById, [id]);
    return rows[0];
  }),

  create: genericCatcher(async (attenderData) => {
    const { event_id, user_id, ticket_id, status = "pending" } = attenderData;
    const { rows } = await pool.query(attender.create, [
      event_id,
      user_id,
      ticket_id,
      status,
    ]);
    return rows[0];
  }),

  update: genericCatcher(async (id, attenderData) => {
    const { event_id, user_id, ticket_id, status } = attenderData;
    const { rows } = await pool.query(attender.update, [
      event_id,
      user_id,
      ticket_id,
      status,
      id,
    ]);
    return rows[0];
  }),

  deleteById: genericCatcher(async (id) => {
    const { rows } = await pool.query(attender.deleteById, [id]);
    return rows[0];
  }),
};
