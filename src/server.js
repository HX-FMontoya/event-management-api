const express = require("express");
const config = require("./config");
const { core, errorHandler } = require("./middlewares");

const app = express();

core(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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
