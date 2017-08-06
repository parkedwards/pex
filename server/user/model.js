const db = require('../database');

db.query(
  `create table if not exists "users" (
  _id serial primary key,
  userId varchar(256) unique not null,
  email varchar(256) unique not null,
  first_name varchar(256) not null,
  last_name varchar(256) not null
)`,
  err => {
    if (err) {
      console.error('===== issue with user table creation ======');
      console.error(err);
    }
  },
);

module.exports = db;
