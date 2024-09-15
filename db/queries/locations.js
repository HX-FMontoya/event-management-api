module.exports = {
  findLocationByNameAddressAndCity: `SELECT l.*, 
    row_to_json(c) AS city
    FROM locations l
    JOIN cities c ON l.city = c.id
    WHERE l.name = $1
    AND l.address = $2
    AND c.id = $3;`,
  createLocation: `INSERT INTO locations 
  (name, address, city, latitude, longitude, image_url)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING id;`,
};
