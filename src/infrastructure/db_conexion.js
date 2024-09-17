const { Pool } = require("pg");
const config = require("../config")

const pool = new Pool({
  ...config.getDbConfig(),
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = {
  conexion: async () => {
    try {
      const client = await pool.connect();
      return client;
    } catch (error) {
      console.log("Error getting pool client", error);
    }
  },
  pool,
};
