const { pool } = require("../../db/db_conexion");
const { user } = require("../../db/queries");

module.exports = async (userData, role) => {
  const { name, email, profile_image_url } = userData;
  const { rows: existingUsers } = await pool.query(user.findUserByEmail, [email]);

  if (existingUsers.length > 0) {
    return existingUsers[0].id;
  }

  const newUserValues = [name, email, role, "active", profile_image_url];
  const { rows: newUser } = await pool.query(user.create, newUserValues);

  return newUser[0].id;
};
