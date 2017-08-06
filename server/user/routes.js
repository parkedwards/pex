const { Router } = require('express');
const validateSchema = require('../utils/validateSchema');

const { fetchUserDetails } = require('./controller');

const user = new Router();

// should this be a get? can you just read off the jwt for the userid?
user.post('/', fetchUserDetails);

module.exports = user;