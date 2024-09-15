module.exports = {
  getAll: (buildQuery) =>
    buildQuery({
      type: "select",
      tableName: "users",
      columns: ["*"],
    }),

  getById: (buildQuery) =>
    buildQuery({
      type: "select",
      tableName: "users",
      columns: ["*"],
      conditions: ["id = $1"],
    }),

  findUserByEmail: (buildQuery) =>
    buildQuery({
      type: "select",
      tableName: "users",
      columns: ["*"],
      conditions: ["email = $1"],
    }),

  create: (buildQuery) =>
    buildQuery({
      type: "insert",
      tableName: "users",
      columns: ["name", "email", "role", "status", "profile_image_url"],
      values: ["name", "email", "role", "status", "profile_image_url"],
    }),

  update: (buildQuery) =>
    buildQuery({
      type: "update",
      tableName: "users",
      columns: ["name", "email", "role", "status", "profile_image_url"],
      values: ["name", "email", "role", "status", "profile_image_url"],
      conditions: ["id = $6"],
    }),

  deleteById: (buildQuery) =>
    buildQuery({
      type: "delete",
      tableName: "users",
      conditions: ["id = $1"],
    }),
};
