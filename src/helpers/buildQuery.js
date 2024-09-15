module.exports = ({
  type,
  tableName,
  columns = ["*"],
  values = [],
  conditions = [],
  joins = [],
  orderBy = "",
  limit = 0,
}) => {
  let query = "";

  switch (type) {
    case "select":
      query = `SELECT ${columns.join(", ")} FROM ${tableName}`;

      if (joins.length > 0) {
        joins.forEach((join) => {
          query += ` ${join.type} JOIN ${join.table} ON ${join.condition}`;
        });
      }

      if (conditions.length > 0) {
        query += ` WHERE ${conditions.join(" AND ")}`;
      }

      if (orderBy) {
        query += ` ORDER BY ${orderBy}`;
      }

      if (limit > 0) {
        query += ` LIMIT ${limit}`;
      }

      break;

    case "insert":
      const placeholders = values.map((_, i) => `$${i + 1}`);
      query = `INSERT INTO ${tableName} (${columns.join(
        ", "
      )}) VALUES (${placeholders.join(", ")}) RETURNING *;`;
      break;

    case "update":
      const updates = columns.map((col, i) => `${col} = $${i + 1}`);
      query = `UPDATE ${tableName} SET ${updates.join(
        ", "
      )} WHERE ${conditions.join(" AND ")} RETURNING *;`;
      break;

    case "delete":
      query = `DELETE FROM ${tableName} WHERE ${conditions.join(
        " AND "
      )} RETURNING *;`;
      break;

    default:
      throw new Error("Unsupported query type");
  }

  return query;
};
