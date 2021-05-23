exports.up = knex => knex.schema.createTable('users', t => {
  t.increments();

  t.integer('segment_id').unsigned().references('id').inTable('segments').onDelete('SET NULL');

  t.string('name');
  t.string('username').notNullable();
  t.string('password').notNullable();
  t.boolean('is_poster').defaultsTo(false);
  t.boolean('events_notification').defaultsTo(false);
  t.boolean('public_bids_notification').defaultsTo(false);
});

exports.down = knex => knex.schema.dropTable('users');
  