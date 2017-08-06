const db = require('../database');

db.query(
  `create table if not exists "auth" (
  _id serial primary key,
  userid varchar(256) unique not null,
  email varchar(256) unique not null,
  password varchar(256) not null
)`,
  err => {
    if (err) {
      console.error('===== issue with auth table creation ======');
      console.error(err);
    }
  },
);

module.exports = db;
