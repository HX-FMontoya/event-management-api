module.exports = {
  getAll: (buildQuery) =>
    buildQuery({
      type: "select",
      tableName: "events e",
      columns: [
        "e.id",
        "e.title",
        "e.description",
        "e.start_date",
        "e.end_date",
        "e.status",
        "e.image_url",
        "row_to_json(u) AS created_by",
        "row_to_json(l) AS location",
        `(
            SELECT json_agg(row_to_json(a)) 
            FROM (
                SELECT 
                    a.id AS id,
                    row_to_json(attender_user) AS user,
                    a.status
                FROM attenders a
                JOIN users attender_user ON a.user_id = attender_user.id
                WHERE a.event_id = e.id
            ) a
        ) AS attenders`,
      ],
      joins: [
        { type: "INNER", table: "users u", condition: "e.created_by = u.id" },
        {
          type: "LEFT",
          table: "locations l",
          condition: "e.location_id = l.id",
        },
      ],
    }),
  getById: (buildQuery) =>
    buildQuery({
      type: "select",
      tableName: "events e",
      columns: [
        "e.id",
        "e.title",
        "e.description",
        "e.start_date",
        "e.end_date",
        "e.status",
        "e.image_url",
        "row_to_json(u) AS created_by",
        "row_to_json(l) AS location",
        `(
            SELECT json_agg(row_to_json(a)) 
            FROM (
                SELECT 
                    a.id AS id,
                    row_to_json(attender_user) AS user,
                    a.status
                FROM attenders a
                JOIN users attender_user ON a.user_id = attender_user.id
                WHERE a.event_id = e.id
            ) a
        ) AS attenders`,
      ],
      joins: [
        { type: "INNER", table: "users u", condition: "e.created_by = u.id" },
        {
          type: "LEFT",
          table: "locations l",
          condition: "e.location_id = l.id",
        },
      ],
      conditions: ["e.id = $1"],
    }),
  create: (buildQuery) =>
    buildQuery({
      type: "insert",
      tableName: "events",
      columns: [
        "title",
        "description",
        "start_date",
        "end_date",
        "status",
        "created_by",
        "location_id",
        "image_url",
      ],
      values: [
        "title",
        "description",
        "start_date",
        "end_date",
        "status",
        "created_by",
        "location_id",
        "image_url",
      ],
    }),
  update: (buildQuery) =>
    buildQuery({
      type: "update",
      tableName: "events",
      columns: [
        "title",
        "description",
        "start_date",
        "end_date",
        "status",
        "created_by",
        "location_id",
        "image_url",
      ],
      values: [
        "title",
        "description",
        "start_date",
        "end_date",
        "status",
        "created_by",
        "location_id",
        "image_url",
      ],
      conditions: ["id = $9"],
    }),
  deleteById: (buildQuery) =>
    buildQuery({
      type: "delete",
      tableName: "events",
      conditions: ["id = $1"],
    }),
};
