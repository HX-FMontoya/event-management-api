const { pool } = require("../../db/db_conexion");
const { city } = require("../../db/queries");

module.exports = async (cityName) => {
  const { rows: existingCities } = await pool.query(city.findCityByName, [
    cityName,
  ]);

  if (existingCities.length > 0) {
    return existingCities[0].id;
  }

  const { rows: newCity } = await pool.query(city.create, [cityName]);

  return newCity[0].id;
};
