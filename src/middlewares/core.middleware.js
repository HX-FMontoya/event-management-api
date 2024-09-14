const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const config = require("../config");

const corsOptions = {
  origin: config.getAllowedOrigins(),
  methods: ["GET", "POST", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

module.exports = (app) => {
  app.use(morgan("dev"));
  app.use(cors(corsOptions));
  app.use(express.json());
};
