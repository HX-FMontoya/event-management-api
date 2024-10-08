const server = require("./src/server");
const { conexion } = require("./src/infrastructure/db_conexion");

conexion()
  .then(() => {
    console.log("Database connected");
    server.start();
  })
  .catch((reason) => {
    console.log("Error connecting to database", reason);
    process.exit(1);
  });
