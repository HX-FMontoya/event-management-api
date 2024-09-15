const { pool } = require("../../db/db_conexion");
const {
  getAll,
  getById,
  create,
  update,
  deleteById,
} = require("../../db/queries/events");
const { findOrCreateUser, findOrCreateLocation } = require("../helpers")

module.exports = {
  getAllEvents: async () => {
    const { rows } = await pool.query(getAll);
    return rows;
  },
  getEventById: async (id) => {
    const { rows } = await pool.query(getById, [id]);
    return rows[0];
  },
  createEvent: async (eventData) => {
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

    const userId = await findOrCreateUser(created_by, "organizer");
    const locationId = await findOrCreateLocation(location);

    const values = [
      title,
      description,
      start_date,
      end_date,
      status,
      userId,
      locationId,
      image_url,
    ];

    const { rows: createdEvent } = await pool.query(create, values);
    const { rows: fullEvent } = await pool.query(getById, [
      createdEvent[0].id,
    ]);
    return fullEvent[0];
  },
  updateEvent: async (id, eventData) => {
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

    const userId = await findOrCreateUser(created_by);
    const locationId = await findOrCreateLocation(location);

    const values = [
      title,
      description,
      start_date,
      end_date,
      status,
      userId,
      locationId,
      image_url,
      id,
    ];
    const { rows: updatedEvent } = await pool.query(update, values);
    const { rows: fullEvent } = await pool.query(getById, [
      updatedEvent[0].id,
    ]);
    return fullEvent[0];
  },
  deleteEvent: async (id) => {
    const { rowCount, rows } = await pool.query(deleteById, [id]);
    return rowCount === 1 && rows[0];
  },
};
