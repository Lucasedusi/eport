const knex = require('../database');

const tableName = 'segments';

module.exports = {
  async findAll(where) {
    const { term } = where;
    const query = knex(tableName);

    if (term) {
      query.where('name', 'like', `%${term}%`);
    }

    return query;
  },
};
