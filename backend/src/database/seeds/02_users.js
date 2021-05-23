const { hashSync } = require("bcryptjs");

const tableName = 'users';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          name: 'Adriana Leticya',
          is_poster: true,
          username: '61924843000179',
          password: hashSync('123456', 8),
          segment_id: 1,
          events_notification: false,
          public_bids_notification: true,  
        },
        {
          name: 'Lucas Eduardo',
          is_poster: false,
          username: '76602426109',
          password: hashSync('123456', 8),
          segment_id: 2,
          events_notification: true,
          public_bids_notification: false,  
        },
        {
          name: 'Osvaldo Aurélio',
          is_poster: false,
          username: '71794446000183',
          password: hashSync('123456', 8),
          segment_id: 3,
          events_notification: true,
          public_bids_notification: true,  
        }
      ]);
    });
};
