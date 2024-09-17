const config = require("../../config");

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
    ...(config.getEnv() === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
