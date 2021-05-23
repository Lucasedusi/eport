const knex = require('../database');

const tableName = 'public_bids';

module.exports = {
  async findAll(where) {
    const { modality, segment_id, lauching_date } = where;
    const query = knex(tableName);

    if (modality !== '0') {
      query.where('modality', modality);
    }

    if (segment_id !== '0') {
      query.where('segment_id', segment_id)
    }

    if (lauching_date !== '0') {
      const start_of_day = lauching_date;
      const end_of_day = new Date(
        (new Date(lauching_date)).setSeconds(86399)
      ).toISOString();

      query.whereBetween('lauching_date', [start_of_day, end_of_day]);
    }

    return query;
  },

  async findByPk(id) {
    return knex(tableName).where({ id });
  },
};
