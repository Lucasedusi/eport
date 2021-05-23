const { storeUser, getUserByPk, editUser, destroyUser } = require('../services');

module.exports = {
  async store(req, res, next) {
    const { user } = req.body;

    try {
      const data = await storeUser(user);

      return res.status(201).json({ user: data.user });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },

  async show(req, res, next) {
    const { id } = req.params;

    try {
      const data = await getUserByPk(id);

      return res.json({ user: data.user });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },

  async edit(req, res, next) {
    const { params: { id }, body: { user } } = req;

    try {
      const data = await editUser(id, user);

      return res.json({ user: data.user });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },

  async destroy(req, res, next) {
    const { id } = req.params;

    try {
      await destroyUser(id);

      return res.status(204).json();
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },
};
