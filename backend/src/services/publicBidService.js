const PublicBid = require('../models/PublicBid');

module.exports = {
  async listPublicBid(where = {}) {
    const publicBids = await PublicBid.findAll(where);

    return { publicBids };
  },

  async getPublicBidByPk(id) {
    if (id <= 0) {
      throw {
        status: 400,
        message: 'identificador inválido',
      };
    }

    const [foundPublicBid] = await PublicBid.findByPk(id);
    if (!foundPublicBid) {
      throw {
        status: 404,
        message: 'Licitação não encontrada',
      };
    }

    return { publicBid: foundPublicBid };
  },
};
