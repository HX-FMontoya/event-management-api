const buildQuery = require("../buildQuery");
const eventQueries = require("./events");
const locationQueries = require("./locations");
const userQueries = require("./users");
const attenderQueries = require("./attenders");
const cityQueries = require("./cities");
const ticketQueries = require("./tickets");
const credentialQueries = require("./credentials");

module.exports = {
  event: {
    getAll: eventQueries.getAll(buildQuery),
    getById: eventQueries.getById(buildQuery),
    create: eventQueries.create(buildQuery),
    update: eventQueries.update(buildQuery),
    deleteById: eventQueries.deleteById(buildQuery),
  },
  location: {
    findLocationByNameAddressAndCity:
      locationQueries.findLocationByNameAddressAndCity(buildQuery),
    createLocation: locationQueries.createLocation(buildQuery),
  },
  user: {
    getAll: userQueries.getAll(buildQuery),
    getById: userQueries.getById(buildQuery),
    findByEmail: userQueries.findByEmail(buildQuery),
    create: userQueries.create(buildQuery),
    update: userQueries.update(buildQuery),
    deleteById: userQueries.deleteById(buildQuery),
  },
  attender: {
    getAll: attenderQueries.getAll(buildQuery),
    getAllByEventId: attenderQueries.getAllByEventId(buildQuery),
    getById: attenderQueries.getById(buildQuery),
    create: attenderQueries.create(buildQuery),
    update: attenderQueries.update(buildQuery),
    deleteById: attenderQueries.deleteById(buildQuery),
  },
  city: {
    findCityByName: cityQueries.findCityByName(buildQuery),
    create: cityQueries.create(buildQuery),
  },
  ticket: {
    getAll: ticketQueries.getAll(buildQuery),
    getById: ticketQueries.getById(buildQuery),
    create: ticketQueries.create(buildQuery),
    update: ticketQueries.update(buildQuery),
    deleteById: ticketQueries.deleteById(buildQuery),
  },
  credential: {
    create: credentialQueries.create(buildQuery),
    findByUserId: credentialQueries.findByUserId(buildQuery)
  },
};
