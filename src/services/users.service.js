const { hashPassword, generateToken } = require("./auth.service");
const { pool } = require("../../db/db_conexion");
const { user, credential } = require("../../db/queries");

module.exports = {
  getAll: async () => {
    const { rows } = await pool.query(user.getAll);
    return rows;
  },

  getById: async (id) => {
    const { rows } = await pool.query(user.getById, [id]);
    return rows[0];
  },

  create: async (userData) => {
    const hashedPassword = await hashPassword(userData.password);

    const values = [
      userData.name,
      userData.email,
      userData.role,
      "active",
      userData.profile_image_url,
    ];

    const { rows: createdUser } = await pool.query(user.create, values);

    await pool.query(credential.create, [createdUser[0].id, hashedPassword]);

    const token = generateToken({
      id: createdUser[0].id,
      email: createdUser[0].email,
      role: createdUser[0].role,
    });

    return { user: createdUser[0], token };
  },

  update: async (id, userData) => {
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
  },

  deleteById: async (id) => {
    const { rowCount, rows } = await pool.query(user.deleteById, [id]);
    return rowCount === 1 && rows[0];
  },
};
