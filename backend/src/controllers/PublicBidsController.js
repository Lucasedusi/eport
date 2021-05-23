const { listPublicBid, getPublicBidByPk, } = require('../services');

module.exports = {
  async list(req, res, next) {
    const { query } = req;

    try {
      const data = await listPublicBid(query);

      return res.json({ publicBids: data.publicBids });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },

  async show(req, res, next) {
    const { id } = req.params;

    try {
      const data = await getPublicBidByPk(id);

      return res.json({ publicBid: data.publicBid });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },
};
