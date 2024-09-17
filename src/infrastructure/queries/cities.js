module.exports = {
  findCityByName: (buildQuery) =>
    buildQuery({
      type: "select",
      tableName: "cities",
      columns: ["*"],
      conditions: ["name = $1"],
    }),
  create: (buildQuery) =>
    buildQuery({
      type: "insert",
      tableName: "cities",
      columns: ["name"],
      values: ["$1"],
      returning: "*",
    }),
};
