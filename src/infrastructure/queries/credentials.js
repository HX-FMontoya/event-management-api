module.exports = {
  create: (buildQuery) =>
    buildQuery({
      type: "insert",
      tableName: "credentials",
      columns: ["user_id", "password_hash"],
      values: ["$1", "$2"],
      returning: "*",
    }),
  findByUserId: (buildQuery) =>
    buildQuery({
      type: "selectOne",
      tableName: "credentials",
      columns: ["*"],
      conditions: ["user_id = $1"],
    }),
};
