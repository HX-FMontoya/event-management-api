const { pool } = require("../../db/db_conexion");
const { event } = require("../../db/queries");
const { findOrCreateUser, findOrCreateLocation } = require("../helpers");
const { genericCatcher } = require("../utils/catchers");

module.exports = {
  getAll: genericCatcher(async () => {
    const { rows } = await pool.query(event.getAll);
    return rows;
  }),
  getById: genericCatcher(async (id) => {
    const { rows } = await pool.query(event.getById, [id]);
    return rows[0];
  }),
  create: genericCatcher(async (eventData) => {
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

    const { rows: createdEvent } = await pool.query(event.create, values);
    const { rows: fullEvent } = await pool.query(event.getById, [createdEvent[0].id]);
    return fullEvent[0];
  }),
  update: genericCatcher(async (id, eventData) => {
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
    const { rows: updatedEvent } = await pool.query(event.update, values);
    const { rows: fullEvent } = await pool.query(event.getById, [updatedEvent[0].id]);
    return fullEvent[0];
  }),
  delete: genericCatcher(async (id) => {
    const { rowCount, rows } = await pool.query(event.deleteById, [id]);
    return rowCount === 1 && rows[0];
  }),
};
