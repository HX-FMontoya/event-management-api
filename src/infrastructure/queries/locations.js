module.exports = {
  findLocationByNameAddressAndCity: (buildQuery) =>
    buildQuery({
      type: "select",
      tableName: "locations l",
      columns: [
        "l.id",
        "l.name",
        "l.address",
        "l.latitude",
        "l.longitude",
        "l.image_url",
        "row_to_json(c) AS city",
      ],
      joins: [
        { type: "INNER", table: "cities c", condition: "l.city_id = c.id" },
      ],
      conditions: ["l.name = $1", "l.address = $2", "c.id = $3"],
    }),
  createLocation: (buildQuery) =>
    buildQuery({
      type: "insert",
      tableName: "locations",
      columns: [
        "name",
        "address",
        "city_id",
        "latitude",
        "longitude",
        "image_url",
      ],
      values: [
        "name",
        "address",
        "city_id",
        "latitude",
        "longitude",
        "image_url",
      ],
    }),
};
