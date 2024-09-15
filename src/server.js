const express = require("express");
const config = require("./config");
const { core, errorHandler } = require("./middlewares");
const { eventsRoutes, usersRoutes, ticketsRoutes, attendersRoutes } = require("./routes");

const app = express();

core(app);

app.use("/api/events", eventsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/tickets", ticketsRoutes);
app.use("/api/attenders", attendersRoutes);

app.use(errorHandler);

module.exports = {
  start: () => {
    app.listen(config.getPort(), (err) => {
      if (err) {
        console.error("Error starting server:", err);
      } else {
        console.log(
          `Server running in ${config.getEnv()} mode on http://localhost:${config.getPort()}`
        );
      }
    });
  },
  app,
};
