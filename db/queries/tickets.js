module.exports = {
  getAll: (buildQuery) =>
    buildQuery({
      type: "select",
      tableName: "tickets t",
      columns: [
        "t.id",
        "t.ticket_type",
        "t.price",
        "t.purchase_date",
        "t.status",
        "row_to_json(u) AS user",
        "row_to_json(e) AS event",
      ],
      joins: [
        { type: "INNER", table: "users u", condition: "t.user_id = u.id" },
        { type: "INNER", table: "events e", condition: "t.event_id = e.id" },
      ],
    }),
  getById: (buildQuery) =>
    buildQuery({
      type: "select",
      tableName: "tickets t",
      columns: [
        "t.id",
        "t.ticket_type",
        "t.price",
        "t.purchase_date",
        "t.status",
        "row_to_json(u) AS user",
        "row_to_json(e) AS event",
      ],
      joins: [
        { type: "INNER", table: "users u", condition: "t.user_id = u.id" },
        { type: "INNER", table: "events e", condition: "t.event_id = e.id" },
      ],
      conditions: ["t.id = $1"],
    }),
  create: (buildQuery) =>
    buildQuery({
      type: "insert",
      tableName: "tickets",
      columns: ["event_id", "user_id", "ticket_type", "price"],
      values: ["event_id", "user_id", "ticket_type", "price"],
    }),
  update: (buildQuery) =>
    buildQuery({
      type: "update",
      tableName: "tickets",
      columns: ["event_id", "user_id", "ticket_type", "price"],
      values: ["event_id", "user_id", "ticket_type", "price"],
      conditions: ["id = $5"],
    }),
  deleteById: (buildQuery) =>
    buildQuery({
      type: "delete",
      tableName: "tickets",
      conditions: ["id = $1"],
    }),
};
