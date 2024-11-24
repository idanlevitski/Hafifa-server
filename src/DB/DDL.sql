DROP TABLE IF EXISTS users;

CREATE TABLE users (
  uuid SERIAL PRIMARY KEY,
  id TEXT,
  last_digit TEXT
);