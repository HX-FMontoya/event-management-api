const { pool } = require("../../db/db_conexion");
const {
  findLocationByNameAddressAndCity,
  createLocation,
} = require("../../db/queries/locations");
const findOrCreateCity = require("./findOrCreateCity");

module.exports = async (locationData) => {
  const { name, address, city } = locationData;

  const cityId = await findOrCreateCity(city);

  const { rows: existingLocations } = await pool.query(
    findLocationByNameAddressAndCity,
    [name, address, cityId]
  );

  if (existingLocations.length > 0) {
    return existingLocations[0].id;
  }

  const newLocationValues = [
    name,
    address,
    cityId,
    locationData.latitude,
    locationData.longitude,
    locationData.image_url,
  ];
  const { rows: newLocation } = await pool.query(
    createLocation,
    newLocationValues
  );

  return newLocation[0].id;
};
