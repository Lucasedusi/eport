exports.up = knex => knex.schema.createTable('events', t => {
  t.increments();

  t.integer('user_id').unsigned().references('id').inTable('users').onDelete('SET NULL');

  t.string('title').notNullable();
  t.text('description');
  t.datetime('start_date');
});

exports.down = knex => knex.schema.dropTable('events');
