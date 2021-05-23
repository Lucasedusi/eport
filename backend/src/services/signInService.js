const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const User = require('../models/User');
const { expiresIn, secret } = require('../config');

module.exports = async function(username, password) {
  const [user] = await User.findOne({ username });
  if (!user) {
    throw {
      status: 404,
      message: 'username e/ou Password incorreto'
    };
  }

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) {
    throw {
      status: 404,
      message: 'username e/ou Password incorreto'
    };
  }

  const token = sign({}, secret, {
    subject: `${user.id}-${user.is_poster ? 'is_poster' : ''}`,
    expiresIn,
  });

  return { user, token };
};
