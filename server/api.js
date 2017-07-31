const { Router } = require('express');
const { encryptPassword } = require('./utils/bcrypt');

const authRoutes = require('./auth/routes');
const userRoutes = require('./user/routes');

const api = new Router();

api.get('/', () => {
  console.log('ayyyyyyyyy');
  const email = 'esangpark@gmail.com';
  const password = 'Shortybord-45';
  console.log(encryptPassword(password));
});

api.get('/test', () => console.log('testing testing bitches'));

api.use('/auth', authRoutes);
api.use('/user', userRoutes);

module.exports = api;
