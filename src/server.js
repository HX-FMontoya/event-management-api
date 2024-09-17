const express = require("express");
const config = require("./config");
const { core, errorHandler } = require("./middlewares");
const {
  authRoutes,
  eventsRoutes,
  usersRoutes,
  ticketsRoutes,
  attendersRoutes,
  reservationsRoutes,
} = require("./routes");

const app = express();

core(app);

app.use("/api/auth", authRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/tickets", ticketsRoutes);
app.use("/api/attenders", attendersRoutes);
app.use("/api/reservations", reservationsRoutes);

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
