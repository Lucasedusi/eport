const { listSegment } = require('../services');

module.exports = {
  async list(req, res, next) {
    const { query } = req;

    try {
      const data = await listSegment(query);

      return res.json({ segments: data.segments });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },
};
