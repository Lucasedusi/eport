exports.up = knex => knex.schema.createTable('segments', t => {
  t.increments();

  t.string('name').notNullable();
  t.text('description');
});

exports.down = knex => knex.schema.dropTable('segments');
