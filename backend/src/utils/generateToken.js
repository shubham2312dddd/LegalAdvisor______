const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
    // Token lifetime set to 10 minutes
    expiresIn: '10m',
  });
};

module.exports = generateToken;
