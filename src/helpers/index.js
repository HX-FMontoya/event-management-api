const { genericCatcher } = require("../utils/catchers");

module.exports = {
  findOrCreateUser: genericCatcher(require("./findOrCreateUser")),
  findOrCreateLocation: genericCatcher(require("./findOrCreateLocation")),
  findOrCreateCity: genericCatcher(require("./findOrCreateCity")),
};
