module.exports = {
  findLocationByNameAndAddress:
    "SELECT * FROM locations WHERE name = $1 AND address = $2;",
  createLocation:
    "INSERT INTO locations (name, address, city, latitude, longitude, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;",
};
