const { Router } = require('express');
const validateSchema = require('../utils/validateSchema');
const { signup, login } = require('./controller');

const auth = new Router();

auth.post('/', (req, res, next) => {
  console.log('<< POST : login >>');
  next();
}, login);

auth.post('/auth/signup', (req, res) => {
  console.log('<< POST : signup >>');
});

module.exports = auth;
