require("dotenv").config();

class Config {
  #db;
  #jwt;
  #env;
  #port;
  #allowedOrigins;

  constructor() {
    this.#port = process.env.PORT || 3000;
    this.#db = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      name: process.env.DB_NAME,
    };
    this.#jwt = {
      secret: process.env.JWT_SECRET,
    };
    this.#env = process.env.NODE_ENV || "development";
    this.#allowedOrigins = process.env.ALLOWED_ORIGINS
      ? process.env.ALLOWED_ORIGINS.split(",")
      : ["http://localhost:3000"];
  }

  getPort() {
    return this.#port;
  }

  getDbConfig() {
    return this.#db;
  }

  getJwtSecret() {
    return this.#jwt.secret;
  }

  getEnv() {
    return this.#env;
  }

  getAllowedOrigins() {
    return this.#allowedOrigins;
  }
}

module.exports = new Config();
