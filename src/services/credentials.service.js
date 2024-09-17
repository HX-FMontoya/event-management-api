const { pool } = require("../../db/db_conexion");
const { credential } = require("../../db/queries");

module.exports = {
  createCredentials: async (credentialsData) => {
    const { rows } = await pool.query(credential.create, [
      credentialsData.user_id,
      credentialsData.password_hash,
    ]);
    return rows[0];
  },
};
