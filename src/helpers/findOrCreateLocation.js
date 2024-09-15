const { pool } = require("../../db/db_conexion");
const {
  findLocationByNameAndAddress,
  createLocation,
} = require("../../db/queries/locations");

module.exports = async (locationData) => {
  const { name, address } = locationData;

  const { rows: existingLocations } = await pool.query(
    findLocationByNameAndAddress,
    [name, address]
  );

  if (existingLocations.length > 0) {
    return existingLocations[0].id;
  }

  const newLocationValues = [
    name,
    address,
    locationData.city,
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
