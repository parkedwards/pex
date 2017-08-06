const jwt = require('jsonwebtoken');
const db = require('./model');
const { encryptPassword, decryptPassword } = require('../utils/bcrypt');

module.exports = {
  signup: (req, res) => {
    const user = req.body;
    const hashPw = encryptPassword(user.password);

    db.query(
      'insert into auth (email, password) values ($1, $2)',
      [user.email, hashPw],
      err => {
        if (err) {
          console.error(err);
          return res
            .status(401)
            .json('Something went wrong with your request.');
        }
        // redirect to user creation route
        // or define that on the route level
      },
    );
  },

  login: (req, res) => {
    db.query(
      'select * from auth where email=$1 limit 1',
      [req.body.email],
      (err, user) => {
        if (err) {
          console.error(err);
          return res
            .status(401)
            .json('Something went wrong with your request.');
        }

        if (!user.rows[0]) {
          return res.status(402).json('Incorrect login.  Try again.');
        }

        const hashPw = user.rows[0].password;

        if (!decryptPassword(req.body.password, hashPw)) {
          return res.status(402).json('Incorrect login.  Try again.');
        }

        jwt.sign(
          {
            userId: user.rows[0].userid,
            email: user.rows[0].email,
          },
          process.env.JWT_SECRET,
          { expiresIn: '7d' },
          (error, token) => {
            if (error) {
              return res
                .status(401)
                .json('Something went wrong with your request.');
            }
            return res.status(201).json(token);
          },
        );
      },
    );
  },
};
