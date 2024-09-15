module.exports = {
  findCityByName: `SELECT * FROM cities WHERE name = $1;`,
  createCity: `INSERT INTO cities (name) VALUES ($1) RETURNING *;`,
};
