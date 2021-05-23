const knex = require('../database');

const tableName = 'users';

module.exports = {
  async create(data) {
    return knex(tableName).insert(data);
  },

  async findByPk(id) {
    return knex(tableName).where({ id });
  },

  async findOne(where) {
    return knex(tableName).where(where).limit(1);
  },

  async update(id, data) {
    return knex(tableName).where({ id }).update(data).limit(1);
  },

  async destroy(id) {
    return knex(tableName).where({ id }).del();
  },
};
