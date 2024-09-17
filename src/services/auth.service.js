const config = require("../config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { pool } = require("../../db/db_conexion");
const { user, credential } = require("../../db/queries");

module.exports = {
  login: async (email, password) => {
    const { rows: userRows } = await pool.query(user.findByEmail, [email]);
    if (userRows.length === 0) {
      throw new Error("User not found");
    }

    const foundUser = userRows[0];

    const { rows: credentialsRows } = await pool.query(
      credential.findByUserId,
      [foundUser.id]
    );

    const userCredentials = credentialsRows[0];

    const isValidPassword = await module.exports.verifyPassword(
      password,
      userCredentials.password_hash
    );
    if (!isValidPassword) {
      throw new Error("Invalid credentials");
    }

    const token = module.exports.generateToken({
      id: foundUser.id,
      email: foundUser.email,
      role: foundUser.role,
    });

    return token;
  },
  hashPassword: async (password) => await bcrypt.hash(password, 10),
  verifyPassword: (password, password_hash) =>
    bcrypt.compare(password, password_hash),
  generateToken: (user) =>
    jwt.sign(user, config.getJwtSecret(), { expiresIn: "4h" }),
  extractToken: (req) => req.header("Authorization")?.split(" ")[1],
  verifyToken: (token) => jwt.verify(token, config.getJwtSecret()),
};
