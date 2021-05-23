function errorHandler(err, req, res, next) {
  const {
    status = 500,
    message = 'Internal Server Error'
  } = err;
console.dir(message);

  return res.status(status).json({ message });
}

module.exports = errorHandler;
