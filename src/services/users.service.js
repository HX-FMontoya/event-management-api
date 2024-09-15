const { pool } = require("../../db/db_conexion");
const {
  getAll,
  getById,
  create,
  update,
  deleteById,
} = require("../../db/queries/users");

module.exports = {
  getAllUsers: async () => {
    const { rows } = await pool.query(getAll);
    return rows;
  },
  getUserById: async (id) => {
    const { rows } = await pool.query(getById, [id]);
    return rows[0];
  },
  createUser: async (userData) => {
    const values = [
      userData.name,
      userData.email,
      userData.role,
      userData.status,
      userData.profile_image_url,
    ];
    const { rows } = await pool.query(create, values);
    return rows[0];
  },
  updateUser: async (id, userData) => {
    const values = [
      userData.name,
      userData.email,
      userData.role,
      userData.status,
      userData.profile_image_url,
      id,
    ];
    const { rows } = await pool.query(update, values);
    return rows[0];
  },
  deleteUser: async (id) => {
    const { rowCount, rows } = await pool.query(deleteById, [id]);
    return rowCount === 1 && rows[0];
  },
};
