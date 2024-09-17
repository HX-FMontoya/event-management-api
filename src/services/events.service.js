const { pool } = require("../infrastructure/db_conexion");
const { event } = require("../infrastructure/queries");
const { findOrCreateLocation } = require("../helpers");

module.exports = {
  getAll: async () => {
    const { rows } = await pool.query(event.getAll);
    return rows;
  },
  getById: async (id) => {
    const { rows } = await pool.query(event.getById, [id]);
    return rows[0];
  },
  create: async (eventData) => {
    const {
      title,
      description,
      start_date,
      end_date,
      status,
      created_by,
      location,
      image_url,
    } = eventData;

    const locationId = await findOrCreateLocation(location);

    const values = [
      title,
      description,
      start_date,
      end_date,
      status,
      created_by,
      locationId,
      image_url,
    ];

    const { rows: createdEvent } = await pool.query(event.create, values);
    const { rows: fullEvent } = await pool.query(event.getById, [
      createdEvent[0].id,
    ]);
    return fullEvent[0];
  },
  update: async (id, eventData) => {
    const {
      created_by,
      location,
      title,
      description,
      start_date,
      end_date,
      status,
      image_url,
    } = eventData;

    const locationId = await findOrCreateLocation(location);

    const values = [
      title,
      description,
      start_date,
      end_date,
      status,
      created_by,
      locationId,
      image_url,
      id,
    ];
    const { rows: updatedEvent } = await pool.query(event.update, values);
    const { rows: fullEvent } = await pool.query(event.getById, [
      updatedEvent[0].id,
    ]);
    return fullEvent[0];
  },
  deleteById: async (id) => {
    const { rowCount, rows } = await pool.query(event.deleteById, [id]);
    return rowCount === 1 && rows[0];
  },
};
