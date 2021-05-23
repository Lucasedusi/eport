const { listEvent, storeEvent, getEventByPk, editEvent, destroyEvent } = require('../services');

module.exports = {
  async list(req, res, next) {
    const { query } = req;

    try {
      const data = await listEvent(query);

      return res.json({ events: data.events });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },

  async store(req, res, next) {
    const { event } = req.body;
    event.user_id = req.user_id;

    try {
      const data = await storeEvent(event);

      return res.status(201).json({ event: data.event });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },

  async show(req, res, next) {
    const { id } = req.params;

    try {
      const data = await getEventByPk(id);

      return res.json({ event: data.event });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },

  async edit(req, res, next) {
    const { params: { id }, body: { event } } = req;

    try {
      const data = await editEvent(id, event);

      return res.json({ event: data.event });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },

  async destroy(req, res, next) {
    const { id } = req.params;

    try {
      await destroyEvent(id);

      return res.status(204).json();
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },
};
