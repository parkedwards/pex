const bcrypt = require('bcrypt');

const SALT_FACTOR = 10;

module.exports = {
  encryptPassword: plainText => {
    const hash = bcrypt.hashSync(plainText, SALT_FACTOR);
    return hash;
  },

  decryptPassword: (plainText, hashed) => bcrypt.compareSync(plainText, hashed),
};
