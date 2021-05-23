const { signIn } = require('../services');

module.exports = {
  async create(req, res, next) {
    const { username, password } = req.body.session;

    try {
      const { user, token } = await signIn(username, password);

      return res.json({ user, token });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },
};
