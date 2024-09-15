CREATE TYPE user_role AS ENUM ('admin', 'user', 'organizer');

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL,
  role user_role NOT NULL,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  profile_image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT,
  city VARCHAR(100),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  created_by INT REFERENCES users(id),
  location INT REFERENCES locations(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  status VARCHAR(50) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'cancelled', 'completed')),
  image_url VARCHAR(255),  -- Agrega la columna image_url
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TYPE ticket_type AS ENUM ('VIP', 'General');

CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  event_id INT REFERENCES events(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  ticket_type ticket_type NOT NULL,
  price DECIMAL(10, 2),
  purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'reserved' CHECK (status IN ('reserved', 'paid', 'cancelled', 'refunded')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE attenders (
  id SERIAL PRIMARY KEY,
  event_id INT REFERENCES events(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  ticket_id INT REFERENCES tickets(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'pending', 'cancelled')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE credentials (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  password_hash VARCHAR(255) NOT NULL,
  reset_token VARCHAR(255),
  last_login_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
