const Joi = require('joi');

module.export = schema => (req, res, next) => {
  Joi.validate(req.body, schema, (err, value) => {
    if (err) {
      console.error(err);
      return res.status(402).send('Invalid request body');
    }

    next();
  });
};
