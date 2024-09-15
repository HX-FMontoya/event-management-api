const { pool } = require("../../db/db_conexion");
const { user } = require("../../db/queries");
const { genericCatcher } = require("../utils/catchers");

module.exports = {
  getAll: genericCatcher(async () => {
    const { rows } = await pool.query(user.getAll);
    return rows;
  }),
  getById: genericCatcher(async (id) => {
    const { rows } = await pool.query(user.getById, [id]);
    return rows[0];
  }),
  create: genericCatcher(async (userData) => {
    const values = [
      userData.name,
      userData.email,
      userData.role,
      userData.status,
      userData.profile_image_url,
    ];
    const { rows } = await pool.query(user.create, values);
    return rows[0];
  }),
  update: genericCatcher(async (id, userData) => {
    const values = [
      userData.name,
      userData.email,
      userData.role,
      userData.status,
      userData.profile_image_url,
      id,
    ];
    const { rows } = await pool.query(user.update, values);
    return rows[0];
  }),
  deleteById: genericCatcher(async (id) => {
    const { rowCount, rows } = await pool.query(user.deleteById, [id]);
    return rowCount === 1 && rows[0];
  }),
};
