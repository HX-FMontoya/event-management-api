const { pool } = require("../infrastructure/db_conexion");
const { location } = require("../infrastructure/queries");
const findOrCreateCity = require("./findOrCreateCity");

module.exports = async (locationData) => {
  const { name, address, city } = locationData;

  const cityId = await findOrCreateCity(city);

  const { rows: existingLocations } = await pool.query(
    location.findLocationByNameAddressAndCity,
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
    location.createLocation,
    newLocationValues
  );

  return newLocation[0].id;
};
