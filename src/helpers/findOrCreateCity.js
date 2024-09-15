const { pool } = require("../../db/db_conexion");
const { findCityByName, createCity } = require("../../db/queries/cities");

module.exports = async (cityName) => {
  const { rows: existingCities } = await pool.query(findCityByName, [cityName]);

  if (existingCities.length > 0) {
    return existingCities[0].id;
  }

  const { rows: newCity } = await pool.query(createCity, [cityName]);

  return newCity[0].id;
};
