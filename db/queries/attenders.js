module.exports = {
  getAll: (buildQuery) =>
    buildQuery({
      type: "select",
      tableName: "attenders a",
      columns: [
        "a.id",
        "a.status",
        "row_to_json(u) AS user",
        "row_to_json(e) AS event",
        "row_to_json(t) AS ticket",
      ],
      joins: [
        { type: "INNER", table: "users u", condition: "a.user_id = u.id" },
        { type: "INNER", table: "events e", condition: "a.event_id = e.id" },
        { type: "INNER", table: "tickets t", condition: "a.ticket_id = t.id" },
      ],
    }),
  getAllByEventId: (buildQuery) =>
    buildQuery({
      type: "select",
      tableName: "attenders a",
      columns: [
        "a.id",
        "a.status",
        "row_to_json(u) AS user",
        "row_to_json(e) AS event",
        "row_to_json(t) AS ticket",
      ],
      joins: [
        { type: "INNER", table: "users u", condition: "a.user_id = u.id" },
        { type: "INNER", table: "events e", condition: "a.event_id = e.id" },
        { type: "INNER", table: "tickets t", condition: "a.ticket_id = t.id" },
      ],
      conditions: ["a.event_id = $1"],
    }),
  getById: (buildQuery) =>
    buildQuery({
      type: "select",
      tableName: "attenders a",
      columns: [
        "a.id",
        "a.status",
        "row_to_json(u) AS user",
        "row_to_json(e) AS event",
        "row_to_json(t) AS ticket",
      ],
      joins: [
        { type: "INNER", table: "users u", condition: "a.user_id = u.id" },
        { type: "INNER", table: "events e", condition: "a.event_id = e.id" },
        { type: "INNER", table: "tickets t", condition: "a.ticket_id = t.id" },
      ],
      conditions: ["a.id = $1"],
    }),
  create: (buildQuery) =>
    buildQuery({
      type: "insert",
      tableName: "attenders",
      columns: ["event_id", "user_id", "ticket_id", "status"],
      values: ["event_id", "user_id", "ticket_id", "status"],
    }),
  update: (buildQuery) =>
    buildQuery({
      type: "update",
      tableName: "attenders",
      columns: ["event_id", "user_id", "ticket_id", "status"],
      values: ["event_id", "user_id", "ticket_id", "status"],
      conditions: ["id = $5"],
    }),
  deleteById: (buildQuery) =>
    buildQuery({
      type: "delete",
      tableName: "attenders",
      conditions: ["id = $1"],
    }),
};
