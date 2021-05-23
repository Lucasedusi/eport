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
    const { sub } = verify(token, secret);

    const [user_id, is_poster] = sub.split('-');
    req.user_id = Number(user_id);

    if (is_poster !== 'is_poster') {
      throw {
        error: 'Você não possui permissão para esta ação',
      };
    }

    return next();
  } catch (err) {
    throw {
      status: 403,
      message: err.error ?? 'O token JWT é inválido',
    };
  }
};
