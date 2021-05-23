const path = require('path');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'dev.sqlite3'),
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
      tableNem: 'knex_migrations',
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true
  },

};
