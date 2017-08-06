const { Router } = require('express');
const validateSchema = require('../utils/validateSchema');

const {} = require('./controller');

const user = new Router();

user.post('/', (req, res, next) => {
  console.log(req.user);
});

module.exports = user;
