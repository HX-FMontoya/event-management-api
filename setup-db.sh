if [ -f .env ]; then
  source .env
else
  echo ".env file not found. Please create it."
  exit 1
fi

echo "Creating $DB_NAME database..."
PGPASSWORD=$DB_PASS psql -U $DB_USER -h $DB_HOST -c "CREATE DATABASE $DB_NAME" || echo "Database already exists."

echo "Running schema.sql..."
PGPASSWORD=$DB_PASS psql -U $DB_USER -h $DB_HOST -d $DB_NAME -f $SCHEMA_FILE

if [ -f "$DATA_FILE" ]; then
  echo "Running data.sql..."
  PGPASSWORD=$DB_PASS psql -U $DB_USER -h $DB_HOST -d $DB_NAME -f $DATA_FILE
else
  echo "data.sql not found."
fi

echo "Database configured successfully."
