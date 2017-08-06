const db = require('./model');

module.exports = {
  fetchUserDetails: (req, res) => {
    db.query(
      'select * from users where userid=$1 limit 1',
      [req.body.userId],
      (err, user) => {
        if (err) {
          console.error(err);
          return res
            .status(401)
            .json('Something went wrong with your request.');
        }
        if (!user.rows[0]) {
          return res.status(402).json('User retrieval failed.  Check query again');
        }

        return res.status(201).json({
          first_name: user.rows[0].first_name,
          last_name: user.rows[0].last_name,
        });
      },
    );
  },
};
