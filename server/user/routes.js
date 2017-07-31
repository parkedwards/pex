const { Router } = require('express');
const validateSchema = require('../utils/validateSchema');
const jwtProtected = require('express-jwt');

const { fetchUser } = require('./controller');

const user = new Router();

// should this be a get? can you just read off the jwt for the userid?
user.post('/', jwtProtected({ secret: process.env.JWT_SECRET }), fetchUser);

module.exports = user;