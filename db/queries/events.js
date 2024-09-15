module.exports = {
  getAll: `SELECT e.*, 
    row_to_json(u) AS created_by,
    (
        SELECT row_to_json(l) 
        FROM (
            SELECT l.*, row_to_json(c) AS city
            FROM locations l
            JOIN cities c ON l.city = c.id
            WHERE l.id = e.location
        ) l
    ) AS location
    FROM events e
  JOIN users u ON e.created_by = u.id;`,
  getById: `SELECT e.*, 
    row_to_json(u) AS created_by,
    (
        SELECT row_to_json(l) 
        FROM (
            SELECT l.*, row_to_json(c) AS city
            FROM locations l
            JOIN cities c ON l.city = c.id
            WHERE l.id = e.location
        ) l
    ) AS location
    FROM events e
  JOIN users u ON e.created_by = u.id
  WHERE e.id = $1;`,
  create: `INSERT INTO events 
    (title, description, start_date, end_date, status, created_by, location, image_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;`,
  update: `UPDATE events
    SET title = $1, description = $2, start_date = $3, end_date = $4, status = $5, created_by = $6, location = $7, image_url = $8, updated_at = NOW()
    WHERE id = $9
    RETURNING *;`,
  deleteById: `DELETE FROM events WHERE id = $1 RETURNING *;`,
};
