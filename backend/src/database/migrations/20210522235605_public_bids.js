exports.up = knex => knex.schema.createTable('public_bids', t => {
  t.increments();

  t.integer('segment_id').unsigned().references('id').inTable('segments').onDelete('SET NULL');

  t.string('title').notNullable();
  t.text('description');
  t.datetime('lauching_date');
  t.enum('modality', [
    'Pregão Pesencial',
    'Tomada de Preços',
    'Chamamento Público',
    'Pregão Presencial para Registro de Preços',
    'Pregão Eletrônico para Registro de Preços',
    'Convite',
    'Concorrência',
    'Leilão',
    'Concurso',
    'Pregão Eletrônico',
    'RDC - Regime Diferenciado de Contratações',
  ]).notNullable();
});

exports.down = knex => knex.schema.dropTable('public_bids');
