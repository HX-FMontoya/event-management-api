module.exports = {
  getAll: `SELECT * FROM users`,
  getById: `SELECT * FROM users WHERE id = $1`,
  findUserByEmail: `SELECT * FROM users WHERE email = $1;`,
  create:
    `INSERT INTO users (name, email, role, status, profile_image_url) 
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id;`,
  update:
    `UPDATE users 
    SET name = $1, email = $2, role = $3, status = $4, profile_image_url = $5
    WHERE id = $6
    RETURNING *;`,
  deleteById: `DELETE FROM users WHERE id = $1 RETURNING *;`,
};
