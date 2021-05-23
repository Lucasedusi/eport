const knex = require('../database');

const tableName = 'events';

module.exports = {
  async findAll(where) {
    return knex(tableName).where(where);
  },

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
