const { verify } = require('jsonwebtoken');

const { secret } = require('../config');

module.exports = function(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    throw {
      status: 403,
      message: 'O token JWT não foi encontrado',
    };
  }

  const [, token] = authorization.split(' ');

  try {
    verify(token, secret);

    return next();
  } catch (err) {
    throw {
      status: 403,
      message: 'O token JWT é inválido',
    };
  }
};
