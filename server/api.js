const { Router } = require('express');
const { encryptPassword } = require('./utils/bcrypt');
const jwtProtected = require('express-jwt');

const authRoutes = require('./auth/routes');
const userRoutes = require('./user/routes');
const weightRoutes = require('./weight/routes');

const api = new Router();

api.get('/', () => {
  console.log('ayyyyyyyyy');
  const email = 'esangpark@gmail.com';
  const password = 'Shortybord-45';
  console.log(encryptPassword(password));
});

api.get('/test', () => console.log('testing testing bitches'));

api.use('/auth', authRoutes);

api.use('/user', jwtProtected({ secret: process.env.JWT_SECRET }), userRoutes);

api.use(
  '/weight',
  jwtProtected({ secret: process.env.JWT_SECRET }),
  weightRoutes,
);

module.exports = api;
